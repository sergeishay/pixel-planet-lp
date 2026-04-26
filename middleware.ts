interface EnveloSettingsResponse {
  site: {
    siteTitle?: string | null;
    tagline?: string | null;
  } | null;
  seo: {
    globalTitle?: string | null;
    globalDescription?: string | null;
    defaultOgImage?: string | null;
    googleAnalyticsId?: string | null;
  } | null;
}

interface EnveloRouteResponse {
  title?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImage?: string | null;
}

interface EnveloApiResponse<T> {
  success: boolean;
  data: T;
}

interface EdgeSeoPayload {
  title: string;
  description: string;
  ogImage: string;
  pixels: string;
}

const ENVELO_API_ORIGIN = "https://envelo-delta.vercel.app/";
const ENVELO_API_KEY = "cmo0ewluy0021v72o5f1w3wry";
const ENVELO_PROJECT_SLUG = "test-mo0ewlne";
const ENVELO_SETTINGS_ENDPOINT = `${ENVELO_API_ORIGIN}/api/content/v1/${ENVELO_API_KEY}/settings`;

const HEAD_CLOSE_RE = /<\/head>/i;

export default async function enveloSeoMiddleware(request: Request): Promise<Response> {
  const html = await fetchHostedIndexHtml(request);
  const seoPayload = await resolveEnveloSeoPayload(request);
  const rewrittenHtml = seoPayload ? injectSeoIntoHtml(html, seoPayload, request.url) : html;

  return new Response(rewrittenHtml, {
    headers: new Headers({
      "content-type": "text/html; charset=utf-8",
      "x-envelo-project": ENVELO_PROJECT_SLUG || ENVELO_API_KEY,
      "x-envelo-edge-seo": seoPayload ? "injected" : "skipped",
    }),
  });
}

async function resolveEnveloSeoPayload(request: Request): Promise<EdgeSeoPayload | null> {
  const url = new URL(request.url);
  const [settings, routeData] = await Promise.all([
    fetchEnveloJson<EnveloSettingsResponse>(ENVELO_SETTINGS_ENDPOINT),
    fetchRouteContent(url.pathname),
  ]);

  const title = firstString(
    routeData?.metaTitle,
    routeData?.title,
    settings?.seo?.globalTitle,
    settings?.site?.siteTitle,
    "Envelo Site"
  );
  const description = firstString(
    routeData?.metaDescription,
    settings?.seo?.globalDescription,
    settings?.site?.tagline,
    "Managed by Envelo"
  );
  const ogImage = firstString(routeData?.ogImage, settings?.seo?.defaultOgImage);
  const pixels = buildPixels(settings?.seo?.googleAnalyticsId);

  if (!title && !description && !ogImage && !pixels) {
    return null;
  }

  return { title, description, ogImage, pixels };
}

async function fetchRouteContent(pathname: string): Promise<EnveloRouteResponse | null> {
  const normalizedPath = normalizeRoutePath(pathname);

  if (normalizedPath === "/") {
    return fetchEnveloJson<EnveloRouteResponse>(`${ENVELO_API_ORIGIN}/api/content/v1/${ENVELO_API_KEY}/pages/home`);
  }

  const segments = normalizedPath.split('/').filter(Boolean);
  const slug = segments.at(-1);

  if (!slug) {
    return null;
  }

  if (segments[0] === "blog") {
    return fetchEnveloJson<EnveloRouteResponse>(`${ENVELO_API_ORIGIN}/api/content/v1/${ENVELO_API_KEY}/posts/${slug}`);
  }

  return fetchEnveloJson<EnveloRouteResponse>(`${ENVELO_API_ORIGIN}/api/content/v1/${ENVELO_API_KEY}/pages/${slug}`);
}

async function fetchHostedIndexHtml(request: Request): Promise<string> {
  const incomingUrl = new URL(request.url);
  const staticIndexUrl = new URL("/index.html", incomingUrl.origin);
  const response = await fetch(staticIndexUrl.toString(), { headers: { accept: "text/html" } });

  if (!response.ok) {
    throw new Error(`Failed to fetch hosted index.html (${response.status} ${response.statusText})`);
  }

  return response.text();
}

async function fetchEnveloJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as EnveloApiResponse<T>;
    return payload.success ? payload.data : null;
  } catch {
    return null;
  }
}

function injectSeoIntoHtml(rawHtml: string, seoPayload: EdgeSeoPayload, requestUrl: string): string {
  const injectionMarkup = buildHeadMarkup(seoPayload, requestUrl);

  if (HEAD_CLOSE_RE.test(rawHtml)) {
    return rawHtml.replace(HEAD_CLOSE_RE, `${injectionMarkup}\n</head>`);
  }

  return `<html><head>\n${injectionMarkup}\n</head><body>${rawHtml}</body></html>`;
}

function buildHeadMarkup(seoPayload: EdgeSeoPayload, requestUrl: string): string {
  const canonicalUrl = new URL(requestUrl).toString();

  return [
    "<!-- Envelo Edge SEO Start -->",
    `<title>${escapeHtml(seoPayload.title)}</title>`,
    `<meta name="description" content="${escapeAttribute(seoPayload.description)}">`,
    `<meta property="og:title" content="${escapeAttribute(seoPayload.title)}">`,
    `<meta property="og:description" content="${escapeAttribute(seoPayload.description)}">`,
    `<meta property="og:image" content="${escapeAttribute(seoPayload.ogImage)}">`,
    `<meta property="og:url" content="${escapeAttribute(canonicalUrl)}">`,
    seoPayload.pixels,
    "<!-- Envelo Edge SEO End -->",
  ].join('\n');
}

function buildPixels(googleAnalyticsId?: string | null): string {
  if (!googleAnalyticsId) {
    return "";
  }

  const escapedId = escapeAttribute(googleAnalyticsId);

  return [
    `<script async src="https://www.googletagmanager.com/gtag/js?id=${escapedId}"></script>`,
    `<script>window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "${escapedId}");</script>`,
  ].join('');
}

function normalizeRoutePath(pathname: string): string {
  const normalizedPath = pathname.trim().replace(/\/+$/, '');
  return normalizedPath.length > 0 ? normalizedPath : "/";
}

function firstString(...values: Array<string | null | undefined>): string {
  for (const value of values) {
    if (typeof value === 'string' && value.trim().length > 0) {
      return value;
    }
  }

  return "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value: string): string {
  return escapeHtml(value).replace(/"/g, "&quot;");
}
"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import BrandingProject from "./BrandingProject";

const projects = [
  {
    title: "COSTELLO TATTOO",
    description: "עיצוב ופיתוח עמוד נחיתה בסגנון מינימליסטי, אורבני ומודרני, תוך שימוש בפלטת צבעים מונוכרומטית של אפור,שחור,לבן. חוויית המשתמש נבנתה בקפידה כדי לשקף את האופי הייחודי של הסטודיו, לשדר אלגנטיות וביטחון, ולהדגיש את החיבור בין אמנות לדיוק.",
    service: "עיצוב ופיתוח דף נחיתה",
    liveLink: "https://costellotattoo.co.il/",
    image: "/images/COSTELLO.webp",
    type: "landing",
  },
  {
    title: "HOOBANK",
    description:
      "עיצוב ופיתוח דף נחיתה מודרני ואינטואיטיבי לבנק Hoobank, המספק שירותים פיננסיים מתקדמים ללקוחותיו. האתר מציג את השירותים השונים של הבנק בצורה נגישה תוך כדי חווית משתמש נוחה ופשוטה.",
    service: "עיצוב ופיתוח דף נחיתה",
    liveLink: "https://bank-demo.sergei-lp.com/",
    image: "/images/bank-carusel.webp",
    type: "landing",
  },
  {
    title: "Davinci Residences",
    description: "עיצוב ופיתוח עמוד נחיתה לפרויקט היוקרה החדש בפאפוס — Davinci Residences. העיצוב שואב השראה מהאדריכלות המודרנית של המבנה ומשדר יוקרה, שלווה וחיבור לים.העמוד עוצב בקו נקי ואלגנטי, המדגיש את חוויית המגורים ואת הייחודיות של הפרויקט.",
    service: "פיתוח דף נחיתה",
    liveLink: "https://arthauspro.com/he/פרויקט-דה-וינצ׳י-lps/", 
    image: "/images/arthaus.webp",
    type: "landing",
  },
   {
   title: "ROTEM PIANO",
    description:
        "עיצוב ופיתוח דף נחיתה לרותם המתמחה בכיוון ותיקון פסנתרים. העמוד עוצב ופוּתח בקפידה, מתוך מטרה להדגיש את האופי הייחודי של העסק והבנת קהל הלקוחות והצרכים שלהם. בחירה בפלטת צבעים אלגנטית ונקייה, בשילוב עם אלמנטים עיצוביים המתכתבים עם תחום המוזיקה והאמנות.",
      service: "עיצוב ופיתוח דף נחיתה",        
    liveLink: "https://rotemgold.co.il/",
      image: "/images/rotem-piano.webp",
    type: "landing",
  },
  {
   title: "F.E CONSULTING",
     description: "עיצוב ופיתוח עמוד נחיתה עבור F.E. Consulting מעוצב בצורה מותאמת אישית, בשילוב צבעוניות חמה ואסתטיקה מרשימה, המבטאת מקצועיות וייחודיות. כל פרט בעמוד נבחר בקפידה כדי להמיר גולשים ללקוחות ולהשיג תוצאות אופטימליות, תוך יצירת חוויית משתמש ממוקדת ומזמינה." ,
      service: "עיצוב ופיתוח דף נחיתה",
    liveLink: "https://fraimanconsulting.com/",
      image: "/images/boaz.webp",
    type: "landing",
  },
  {
    title: "GALACTICADS",
     description:
     "יצרנו מיתוג חדש, UX/UI מודרני ופיתוח אתר תדמיתי מרהיב מעולמות הגלקסיה שמציע פונקציונליות מושלמת, חוויית משתמש נגישה וזמינה, ומדגיש את הערכים והחזון של המותג.",
    service: "מיתוג, עיצוב ופיתוח אתר תדמית",
    liveLink: "https://www.galactic-ads.com/",
    image: "/images/galacticad.webp",
    type: "corporate",
  },
    {
    title: "Voice of the People",
      description:
      " היא מועצה יהודית-עולמית, זירה לאחדות, שינוי וצמיחה, הפועלת בהובלתו של נשיא מדינת ישראל, יצחק הרצוג.",
    service: "מיתוג, עיצוב ופיתוח אתר תדמית",
    liveLink: "https://www.voiceofthepeople.network/",
    image: "/images/vop-final.webp",
    type: "corporate",
  },
 {
    title: "WHITEGLOVE",
      description:
   "יצרנו מיתוג חדש, UX/UI מקצועי ופיתוח אתר דינמי ומתקדם שמדגיש את החדשנות שלהם בשיווק מונחה AI ומעניק חוויה אינטואיטיבית, נגישה ומרשימה למשתמשים.",
    service: "מיתוג, עיצוב ופיתוח אתר תדמית",
    liveLink: "https://www.voiceofthepeople.network/",
    image: "/images/whiteglow.webp",
    type: "corporate",
  },
 {
    title: "SketchPad",
      description:
 "עיצוב ופיתוח אתר לעמותת SketchPad – קהילה של חללי עבודה משותפים לארגונים ויזמים יהודיים, המעודדת שיתופי פעולה והשפעה קהילתית.",
    service: "עיצוב לוגו | עיצוב ופיתוח אתר תדמית",
    liveLink: "https://sketchpadchicago.org/",
    image: "/images/sketchpad.webp",
    type: "corporate",
  },
{
    title: "LOCAL PORT",
      description:
      "עיצוב ופיתוח אתר תדמית עבור לוקל פורט, המציג את החזון והפעילות הייחודית של החברה בצורה מקצועית ומזמינה. האתר משקף את הסטנדרטים הגבוהים שלוקל פורט מציבה בתחומי השירות והחדשנות, עם חוויית משתמש מתקדמת ועיצוב שמתאים לאופי הפרויקטים הגדולים בהם הם עוסקים.",
    service: "עיצוב ופיתוח אתר תדמית",
    liveLink: "https://localport.co.il/",
    image: "/images/local-final.webp",
    type: "corporate",
  },
  {
    title: "HS-LAW",
    description:
      "עיצוב ופיתוח אתר תדמית לחיימסון סודאי. משרד עו״ד המוביל בישראל לענייני המגזר המושבי, החקלאי והמנהלי. פיתוח שפה עיצובית רחבה המבוססת על ערכים של מקצועיות, הישגיות וחדשנות.",
    service: "עיצוב ופיתוח אתר תדמית",
    liveLink: "https://hs-law.co.il/",
    image: "/images/hi-final.webp",
    type: "corporate",
  },
  
  // --- BRANDING PROJECTS (NEW) ---
  {
    title: "GALACTICADS",
    description: "יצרנו מיתוג חדש, UX/UI מודרני ופיתוח אתר תדמיתי מרהיב מעולמות הגלקסיה שמציע פונקציונליות מושלמת, חוויית משתמש נגישה וזמינה, ומדגיש את הערכים והחזון של המותג.",
    service: "מיתוג ושפה גרפית",
    liveLink: "https://www.galactic-ads.com/",
    image: "/images/brand-images/galactic-brand1.webp",
    type: "branding",
    imageGallery: [
      "/images/brand-images/galactic-brand2.webp",
      "/images/brand-images/galactic-brand3.webp",
      "/images/brand-images/galactic-brand4.webp",
    ],
  },
  {
    title: "PLAY GROUND",
    description: "עיצוב פופאפים ובאנרים למשחקים בינלאומיים מעוצבים בצורה צבעונית וייחודית. העיצוב מניע לפעולה ומושך את השחקנים לבצע רכישות בתוך המשחק באמצעות עיצוב כפתורים וטיפוגרפיה בולטת.",
    service: "עיצוב פוסטים לסושיאל מדיה + עיצוב פופאפים ובאנרים",
    liveLink: "",
    image: "/images/brand-images/playground1.webp",
    type: "branding",
    imageGallery: [
      "/images/brand-images/playground2.webp",
      "/images/brand-images/playground3.webp",
      "/images/brand-images/playground4.webp",
    ],
  },
  {
    title: "SURAMARE",
    description: "עיצוב ופיתוח עמוד נחיתה לסורא מארה – אולם אירועים ייחודי המוקדש ליצירת חוויות בוטיק מותאמות אישית. מתמחים בהפקת אירועים עסקיים, כנסים, אירועי חברה ותרבות, עם דגש על עיצוב אלגנטי, שירות יוצא דופן וחוויית אורחים בלתי נשכחת.",
    service: "עיצוב פוסטים לסושיאל מדיה + עמוד נחיתה",
    liveLink: "https://suramare.co.il/",
    image: "/images/brand-images/sura1.webp",
    type: "branding",
    imageGallery: [
      "/images/brand-images/sura2.webp",
      "/images/brand-images/sura4.webp",
      "/images/brand-images/sura5.webp",
    ],
  },
  {
    title: "UNICORN",
    description: "פלטפורמה שמחברת בין אמנים לאספנים בעולם הדיגיטלי. יוניקורן היא הבית החדש שלכם לאומנות דיגיטלית. עם ממשק ידידותי וטכנולוגיה מתקדמת, אנו מאפשרים לאמנים להפוך את היצירות שלהם לנכסי NFT ייחודיים, ולחשוף אותן לקהל עולמי.",
    service: "עיצוב לוגו ושפה גרפית רחבה + עיצוב אתר",
    liveLink: "",
    image: "/images/brand-images/unicorn1.webp",
    type: "branding",
    imageGallery: [
      "/images/brand-images/unicorn2.webp",
      "/images/brand-images/unicorn3.webp",
      "/images/brand-images/unicorn4.webp",
    ],
  },
  {
    title: "Voice of the People",
    description: "היא מועצה יהודית-עולמית, זירה לאחדות, שינוי וצמיחה, הפועלת בהובלתו של נשיא מדינת ישראל, יצחק הרצוג.",
    service: "מיתוג, עיצוב ופיתוח אתר תדמית",
    liveLink: "https://www.voiceofthepeople.network/",
    image: "/images/brand-images/vop1.webp",
    type: "branding",
    imageGallery: [
      "/images/brand-images/vop2.webp",
      "/images/brand-images/vop3.webp",
      "/images/brand-images/vop4.webp",
    ],
  },
  {
    title: "WHITEGLOVE",
    description: "יצרנו מיתוג חדש, UX/UI מקצועי ופיתוח אתר דינמי ומתקדם שמדגיש את החדשנות שלהם בשיווק מונחה AI ומעניק חוויה אינטואיטיבית, נגישה ומרשימה למשתמשים.",
    service: "מיתוג ושפה גרפית",
    liveLink: "https://www.voiceofthepeople.network/",
    image: "/images/brand-images/whiteglow1.webp",
    type: "branding",
    imageGallery: [
      "/images/brand-images/whiteglow2.webp",
      "/images/brand-images/whiteglow3.webp",
      "/images/brand-images/whiteglow4.webp",
    ],
  }
];

const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    y: 0,
    opacity: 1,
    duration: 1.1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const imgItem = {
  offscreen: { x: -100, opacity: 0, rotate: 10, scale: 0.8 }, 
  onscreen: { x: 0, opacity: 1, rotate: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 1.5 } },
};
const imgItemReversed = {
  offscreen: { x: 100, opacity: 0, rotate: -10, scale: 0.8 }, 
  onscreen: { x: 0, opacity: 1, rotate: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 1.5 } },
};
const cardVariants = {
  offscreenCard: { y: 50, opacity: 0 },
  onscreenCard: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1.0, delay: 0.2 } }, 
};

const Works = () => {
  const [selectedType, setSelectedType] = useState("landing");

  const tabTitles = [
    { key: "landing", label: "עמוד נחיתה" },
    { key: "corporate", label: "אתרי תדמית" },
    { key: "branding", label: "מיתוג וסושיאל" },
  ];

  const filteredProjects = projects.filter(
    (project) => project.type === selectedType
  );

  return (
    <div id="projects" className={styles.projectsContainer}>
      <motion.h2 className={styles.title}>מהנוצצים שלנו</motion.h2>
      <motion.div className={styles.tabContainer}>
        {tabTitles.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
            onClick={() => setSelectedType(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      <div className={styles.projectsList}>
        {filteredProjects.map((project, index) => {
          if (selectedType === "branding") {
            if (!project.image || !project.imageGallery) {
              console.warn(`Project "${project.title}" type 'branding' missing 'image' or 'imageGallery'. Skipping.`);
              return null;
            }
            return <BrandingProject project={project} key={project.title} />;
          }
          else {
            const isReversed = index % 2 == 0; 
            return (
              <motion.div 
                className={`${styles.project} ${isReversed ? styles.reverse : ""}`}
                key={project.title}
                initial="offscreen" 
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ 
                  offscreen: { opacity: 0, y: 50 },
                  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } } 
                }}
              >
                <motion.div
                  variants={isReversed ? imgItemReversed : imgItem}
                  className={styles.imageContainer}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={project.type === "corporate" ? 550 : 700}
                    height={project.type === "corporate" ? 1200 : 700} 
                    style={{ height: 'auto' }} 
                    className={styles.projectImage}
                    quality={100}
                    priority={index < 2}
                    sizes="(max-width: 900px) 90vw, 50vw"
                  />
                </motion.div>

                <motion.div
                  className={styles.contentContainer}
                >
                  <motion.h3 variants={cardVariants} className={styles.projectTitle}>{project.title}</motion.h3>
                  <motion.p variants={cardVariants} className={styles.description}>{project.description}</motion.p>
                  <motion.p variants={cardVariants} className={styles.serviceTitle}>שירות</motion.p>
                  <motion.div variants={cardVariants} className={styles.divider}></motion.div>
                  <motion.p variants={cardVariants} className={styles.service}>{project.service}</motion.p>
                  {project.liveLink && project.liveLink !== "#" && (
                    <motion.div variants={cardVariants} className={styles.buttonContainer}>
                      <Link href={project.liveLink} target="_blank" className={styles.liveSite}>
                        אתר לייב
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div> 
            );
          }
        })}
      </div> 
    </div> 
  );
};

export default Works;
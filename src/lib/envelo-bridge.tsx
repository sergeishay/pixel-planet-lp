"use client";

import { createElement, type ComponentType, type ReactElement } from "react";
import * as componentModule0 from "@/components/Carousel/BrandingProject";
import * as componentModule1 from "@/components/Clients/Clients";
import * as componentModule2 from "@/components/Contact/index";
import * as componentModule3 from "@/components/Description/index";
import * as componentModule4 from "@/components/Form/Form";
import * as componentModule5 from "@/components/Header/index";
import * as componentModule6 from "@/components/Landing/index";
import * as componentModule7 from "@/components/Header/nav/Footer/index";
import * as componentModule8 from "@/components/Preloader/index";
import * as componentModule9 from "@/components/Header/nav/index";
import * as componentModule10 from "@/components/Popup/Popup";
import * as componentModule11 from "@/components/Services/Services";
import * as componentModule12 from "@/components/SlidingImages/index";
import * as componentModule13 from "@/components/Whatsapp/Whatsapp";
import * as componentModule14 from "@/components/WorkFlow/WorkFlow";
import * as componentModule15 from "@/components/Carousel/Carousel";

type EnveloComponent = ComponentType<Record<string, unknown>>;

export interface EnveloBlock {
  _id?: string;
  _type: string;
  _key?: string;
  [key: string]: unknown;
}

export function getEnveloBlocks(content: unknown): EnveloBlock[] {
  if (!content || typeof content !== "object") {
    return [];
  }

  const blocks = (content as { _blocks?: unknown })._blocks;
  return Array.isArray(blocks) ? (blocks as EnveloBlock[]) : [];
}

export const ComponentRegistry: Record<string, EnveloComponent | undefined> = {
  "BrandingProject": (componentModule0.BrandingProject ?? componentModule0.default) as EnveloComponent,
  "Clients": (componentModule1.Clients ?? componentModule1.default) as EnveloComponent,
  "Contact": (componentModule2.Contact ?? componentModule2.default) as EnveloComponent,
  "Description": (componentModule3.Description ?? componentModule3.default) as EnveloComponent,
  "Form": (componentModule4.Form ?? componentModule4.default) as EnveloComponent,
  "Header": (componentModule5.Header ?? componentModule5.default) as EnveloComponent,
  "Home": (componentModule6.Home ?? componentModule6.default) as EnveloComponent,
  "index": (componentModule7.index ?? componentModule7.default) as EnveloComponent,
  "Index": (componentModule8.Index ?? componentModule8.default) as EnveloComponent,
  "Nav": (componentModule9.Nav ?? componentModule9.default) as EnveloComponent,
  "Popup": (componentModule10.Popup ?? componentModule10.default) as EnveloComponent,
  "Services": (componentModule11.Services ?? componentModule11.default) as EnveloComponent,
  "SlideImages": (componentModule12.SlideImages ?? componentModule12.default) as EnveloComponent,
  "Whatsapp": (componentModule13.Whatsapp ?? componentModule13.default) as EnveloComponent,
  "WorkFlow": (componentModule14.WorkFlow ?? componentModule14.default) as EnveloComponent,
  "Works": (componentModule15.Works ?? componentModule15.default) as EnveloComponent,
};

export function EnveloRenderer({ blocks }: { blocks: EnveloBlock[] }): ReactElement {
  return createElement(
    "div",
    { "data-envelo-renderer": "ready" },
    ...blocks.map((block, index) => {
      const { _id, _type, _key, ...props } = block;
      const Component = ComponentRegistry[_type];
      const key = typeof _id === "string" ? _id : typeof _key === "string" ? _key : `${_type}-${index}`;

      if (!Component) {
        return createElement(
          "div",
          {
            key,
            "data-envelo-missing-component": _type,
          },
          `Unknown Envelo block type: ${_type}`
        );
      }

      return createElement(Component, {
        key,
        ...(props as Record<string, unknown>),
      });
    })
  );
}

export default EnveloRenderer;
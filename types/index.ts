import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


// types.ts
export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  image?: string;
  tags?: string[];
  slug: string;
}

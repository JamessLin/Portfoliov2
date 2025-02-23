export interface BlogPost {
    title: string;
    date: string;
    summary: string;
    content: string;
    slug: string;
    tags?: string[];
    image?: string;
  }
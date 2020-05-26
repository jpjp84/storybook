declare module "notion" {

  import { NotionPageToRender } from "gatsby-source-notionso/lib/renderer"

  export interface Notion {
    allNotionPageBlog: {
      edges: Array<{ node: NotionNode }>
    };
  }

  export interface NotionPage {
    notionPageBlog: NotionPageToRender;
  }

  export interface NotionNode {
    title: string;
    slug: string;
    excerpt: string;
    pageIcon: string;
  }

  export interface NotionContext {
    pathSlug: string;
    pageId: string;
  }
}

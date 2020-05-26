declare module "notion" {

  export interface Notion {
    allNotionPageBlog: {
      edges: Array<{ node: NotionNode }>
    };
  }

  export interface NotionNode {
    title: string;
    slug: string;
    excerpt: string;
    pageIcon: string;
  }
}

declare module "notion" {

  export interface Notion {
    allNotionPageBlog: {
      edges: Node[]
    };
  }

  export interface Node {
    node: {
      title: string;
      slug: string;
      excerpt: string;
      pageIcon: string;
    }
  }
}

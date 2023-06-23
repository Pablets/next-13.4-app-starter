declare namespace Entity {
  declare interface IBlogPost extends WithContentful {
    postId: number;
    slug?: string;
    body?: string;
    title: string;
    category?: string;
    description: string;
    displayAtBlogList?: boolean;
    displayAtBlogHeader?: boolean;
    thumbnailImage?: {
      url: string;
      title?: string;
    };
    heroImage: {
      url: string;
      title?: string;
    };
    tags: string[];
    publishDate: string;
  }
}

declare namespace Query {
  declare namespace BlogPostCollection {
    declare interface Response {
      blogPostCollection?: {
        items: Entity.IBlogPost[];
        limit: number;
        skip: number;
        total: number;
      };
    }
  }

  declare namespace BlogPostSlugCollection {
    declare interface Response {
      blogPostCollection?: {
        items: {
          slug: string;
        }[];
        limit: number;
        skip: number;
        total: number;
      };
    }
  }

  declare namespace BlogPost {
    declare interface Response {
      blogPost?: Entity.IBlogPost;
    }
  }
}

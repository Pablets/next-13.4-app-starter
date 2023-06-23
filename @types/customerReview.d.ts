declare namespace Entity {
  declare interface ICustomerReview extends WithContentful {
    name: string;
    sys: {
      id: string;
    };
    videoReviewUrlYoutube: string;
    customer?: {
      name?: string;
      image?: {
        url?: string;
      };
      altImage?: string;
      country?: string;
    };
    review?: string;
    shortReview?: string;
    company?: {
      sys: {
        id: string;
      };
      companyName?: string;
    };
    postLink: string;
    showInProjectSlider: boolean;
  }
}

declare namespace Query {
  declare namespace CustomerReviewCollection {
    declare interface Response {
      customerReviewCollection: {
        items: Entity.ICustomerReview[];
        limit: number;
        skip: number;
        total: number;
      };
    }
  }
}

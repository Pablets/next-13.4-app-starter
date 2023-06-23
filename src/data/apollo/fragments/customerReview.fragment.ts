import { gql } from '@apollo/client';

export const customerReviewFragment = gql`
  fragment customerReviewFragment on CustomerReview {
    name
    sys {
      id
    }
    videoReviewUrlYoutube
    customer {
      name
      title
      image {
        url
      }
      altImage
      country
    }
    review
    shortReview
    company {
      sys {
        id
      }
      companyName
    }
    postLink
    showInProjectSlider
  }
`;

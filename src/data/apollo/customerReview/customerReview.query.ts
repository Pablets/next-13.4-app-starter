import { gql } from '@apollo/client';
import { customerReviewFragment } from '../fragments';

export const customerReviewCollectionQuery = gql`
  query customerReviewCollection(
    $skip: Int
    $limit: Int
    $preview: Boolean
    $locale: String
    $where: CustomerReviewFilter
    $order: [CustomerReviewOrder]
  ) {
    customerReviewCollection(
      skip: $skip
      limit: $limit
      preview: $preview
      locale: $locale
      where: $where
      order: $order
    ) {
      total
      limit
      skip
      items {
        ...customerReviewFragment
      }
    }
  }
  ${customerReviewFragment}
`;

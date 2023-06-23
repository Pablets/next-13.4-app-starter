import client from '../client';
import { customerReviewCollectionQuery } from './customerReview.query';

export interface GetAllCustomerReviewParams {
  locale?: Locale;
  skip?: number;
  limit?: number;
  preview?: boolean;
  where?: CommonJSON<any>;
  order?: CommonJSON<any>;
}

export const getAllCustomerReviews = async function getAllCustomerReviews({
  locale,
  skip,
  limit = 1000,
  preview,
  where,
  order,
}: GetAllCustomerReviewParams) {
  const { data } = await client.query<Query.CustomerReviewCollection.Response>({
    query: customerReviewCollectionQuery,
    variables: {
      locale,
      skip,
      limit,
      preview,
      where,
      order,
    },
    fetchPolicy: 'cache-first',
  });
  return data.customerReviewCollection;
};

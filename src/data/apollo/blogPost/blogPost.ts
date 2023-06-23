import client from '../client';
import { blogPostCollectionQuery, blogPostQuery, blogPostSlugCollectionQuery } from './blogPost.query';

export interface GetAllBlogPostParams {
  locale?: Locale;
  skip?: number;
  limit?: number;
  preview?: boolean;
  where?: CommonJSON<any>;
  order?: CommonJSON<any>;
}

export const getAllBlogPosts = async function getAllBlogPosts({
  locale,
  skip,
  limit = 1000,
  preview,
  where,
  order,
}: GetAllBlogPostParams) {
  const { data } = await client.query<Query.BlogPostCollection.Response>({
    query: blogPostCollectionQuery,
    variables: {
      locale,
      skip,
      limit,
      preview,
      where,
      order,
    },
    fetchPolicy: 'network-only',
  });
  return data.blogPostCollection || null;
};

export const getAllBlogPostsSlugs = async ({
  locale,
  skip,
  limit = 1000,
  preview,
  where,
  order,
}: GetAllBlogPostParams) => {
  const { data } = await client.query<Query.BlogPostSlugCollection.Response>({
    query: blogPostSlugCollectionQuery,
    variables: {
      locale,
      skip,
      limit,
      preview,
      where,
      order,
    },
    fetchPolicy: 'network-only',
  });
  return data.blogPostCollection || null;
};

export interface GetBlogPostParams {
  id: string;
  locale?: Locale;
  preview?: boolean;
}

export const getBlogPost = async function getBlogPost({ id, locale, preview }: GetBlogPostParams) {
  const { data } = await client.query<Query.BlogPost.Response>({
    query: blogPostQuery,
    variables: {
      id,
      locale,
      preview,
    },
    fetchPolicy: 'cache-first',
  });

  return data.blogPost || null;
};

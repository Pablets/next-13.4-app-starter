import { gql } from '@apollo/client';
import { blogPostFragment, blogPostSlugsFragment } from '../fragments';

export const blogPostCollectionQuery = gql`
  query blogPostCollection(
    $skip: Int
    $limit: Int
    $preview: Boolean
    $locale: String
    $where: BlogPostFilter
    $order: [BlogPostOrder]
  ) {
    blogPostCollection(skip: $skip, limit: $limit, preview: $preview, locale: $locale, where: $where, order: $order) {
      total
      limit
      skip
      items {
        ...blogPostFragment
      }
    }
  }
  ${blogPostFragment}
`;

export const blogPostSlugCollectionQuery = gql`
  query blogPostCollection(
    $skip: Int
    $limit: Int
    $preview: Boolean
    $locale: String
    $where: BlogPostFilter
    $order: [BlogPostOrder]
  ) {
    blogPostCollection(skip: $skip, limit: $limit, preview: $preview, locale: $locale, where: $where, order: $order) {
      total
      limit
      skip
      items {
        ...blogPostSlugsFragment
      }
    }
  }
  ${blogPostSlugsFragment}
`;

export const blogPostQuery = gql`
  query blogPost($id: String!, $preview: Boolean, $locale: String) {
    blogPost(id: $id, preview: $preview, locale: $locale) {
      ...blogPostFragment
    }
  }
  ${blogPostFragment}
`;

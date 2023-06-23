import { gql } from '@apollo/client';

export const blogPostFragment = gql`
  fragment blogPostFragment on BlogPost {
    postId
    slug
    body
    title
    category
    description
    displayAtBlogList
    displayAtBlogHeader
    thumbnailImage {
      url(
        transform: {
          width: 360
          height: 200
          resizeStrategy: THUMB
          resizeFocus: LEFT
          backgroundColor: "rgb:000000"
          format: JPG_PROGRESSIVE
          quality: 100
        }
      )
      title
    }
    heroImage {
      url(
        transform: {
          width: 796
          height: 447
          resizeStrategy: PAD
          resizeFocus: LEFT
          backgroundColor: "rgb:000000"
          format: JPG_PROGRESSIVE
          quality: 100
          cornerRadius: 0
        }
      )
      title
    }
    tags
    publishDate
    sys {
      id
    }
  }
`;

export const blogPostSlugsFragment = gql`
  fragment blogPostSlugsFragment on BlogPost {
    slug
  }
`;

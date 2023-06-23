import { gql } from '@apollo/client';

export const teamMemberFragment = gql`
  fragment teamMemberFragment on TeamMember {
    # id is the slug
    id
    name
    email
    order
    type
    linkedin
    role
    picture {
      url
    }
    sys {
      # sys.id is the real id
      id
    }
  }
`;

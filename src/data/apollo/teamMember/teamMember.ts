// Query
import client from '../client';
import { teamMemberCollectionQuery, teamMemberQuery } from './teamMember.query';

export interface GetAllTeamMembersParams {
  locale?: Locale;
  skip?: number;
  limit?: number;
  preview?: boolean;
  where?: CommonJSON<any>;
  order?: CommonJSON<any>;
}

export const getAllTeamMembers = async function getAllTeamMembers({
  locale,
  skip,
  limit = 1000,
  preview,
  where,
  order,
}: GetAllTeamMembersParams) {
  const { data } = await client.query<Query.TeamMemberCollection.Response>({
    query: teamMemberCollectionQuery,
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

  return data.teamMemberCollection || null;
};

export interface GetTeamMemberParams {
  id: string;
  locale?: Locale;
  preview?: boolean;
}

export const getTeamMember = async function getTeamMember({ id, locale, preview }: GetTeamMemberParams) {
  const { data } = await client.query<Query.TeamMember.Response>({
    query: teamMemberQuery,
    variables: {
      id,
      locale,
      preview,
    },
    fetchPolicy: 'cache-first',
  });

  return data.teamMember || null;
};

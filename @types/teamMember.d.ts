declare namespace Entity {
  declare interface ITeamMember extends WithContentful {
    id: string;
    name?: string;
    email?: string;
    type?: string;
    linkedin?: string;
    role?: string;
    order?: number;
    picture?: {
      url: string;
    };
  }
}

declare namespace Query {
  declare namespace TeamMemberCollection {
    declare interface Response {
      teamMemberCollection?: {
        items: Entity.ITeamMember[];
        limit: number;
        skip: number;
        total: number;
      };
    }
  }

  declare namespace TeamMember {
    declare interface Response {
      teamMember?: Entity.ITeamMember;
    }
  }
}

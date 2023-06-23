export const routes: CommonJSON<IRoute> = {
  HOME_PAGE: {
    path: '/',
    getPath: {
      getBasePath: () => '/',
    },
  },
  ABOUT_US_PAGE: {
    path: '/about-us',
    getPath: {
      getBasePath: () => '/about-us',
      getSlugPath: (teamMember: Entity.ITeamMember) => `/about-us/${teamMember.id}`,
    },
  },
  SERVICES_PAGE: {
    path: '/services',
    getPath: {
      getBasePath: () => '/services',
    },
  },
  PROJECTS_PAGE: {
    path: '/projects',
    getPath: {
      getBasePath: () => '/projects',
    },
  },
  CAREERS_PAGE: {
    path: '/careers',
    getPath: {
      getBasePath: () => '/careers',
    },
  },
  BLOG_PAGE: {
    path: '/blog',
    getPath: {
      getBasePath: () => '/blog',
      getSlugPath: (blog: Entity.IBlogPost) => `/blog/${blog.slug}`,
    },
  },
  AWARDS_PAGE: {
    path: '/awards',
    getPath: {
      getBasePath: () => '/awards',
    },
  },
};

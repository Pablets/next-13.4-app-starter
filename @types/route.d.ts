declare interface IRoute {
  path: string;
  getPath?: {
    getBasePath?: (...params) => string;
    getSlugPath?: (...params) => string;
    [k: string]: (...params) => string;
  };
}

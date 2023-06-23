declare interface Pagination {
  hasPrev: boolean;
  hasNext: boolean;
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

declare interface PaginationResponse<T> extends Pagination {
  data?: T;
}

declare interface BasePagination {
  limit: number;
  page: number;
}

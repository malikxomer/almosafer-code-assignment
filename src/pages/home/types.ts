import { IBlogData } from "../../types/blog";

export interface IBlog {
  loading: boolean;
  page: number;
  total: number;
  blogList: Array<IBlogData>;
  allBlogs: Array<IBlogData>;
}

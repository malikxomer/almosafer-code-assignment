import { ChangeEventHandler } from "react";
import { IBlogData } from "../../types/blog";

export interface ISearchFieldProps {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  searchResults: Array<IBlogData>;
}

export interface INewsCard {
  currentBlog: IBlogData;
}

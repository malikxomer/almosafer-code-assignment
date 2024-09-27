import { FC } from "react";
import { Link } from "react-router-dom";

import { ISearchedItemProps } from "./types";

import "./styles.scss";

const SearchedItem: FC<ISearchedItemProps> = (props): JSX.Element => {
  const { searchedBlog } = props;

  const { title } = searchedBlog;

  return (
    <li className="search-results">
      <Link className="search-results-link" to={`/blog/${searchedBlog?.id}`}>
        <figure className="search-icon-container">
          <img
            loading="lazy"
            src="/img.jpg"
            className="search-icon"
            alt="Something went wrong..."
          />
        </figure>

        <p className="search-blog-title">{title}</p>
      </Link>
    </li>
  );
};

export default SearchedItem;

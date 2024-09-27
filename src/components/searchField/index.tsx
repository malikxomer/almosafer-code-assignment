import { useState, useRef, FC } from "react";

import SearchedItem from "../searchedItem";
import { ISearchFieldProps } from "./types";
import { SearchFieldIcon } from "../../assets/svg";

import "./styles.scss";

const SearchField: FC<ISearchFieldProps> = (props): JSX.Element => {
  const { value, handleChange, searchResults } = props;

  const [isFocused, setIsFocused] = useState(false);
  const searchInput = useRef(null);

  const showDropdown = () => {
    if (document.activeElement === searchInput.current) {
      setIsFocused(() => true);
    }
  };

  const hideDropdown = () => {
    if (document.activeElement !== searchInput.current) {
      setTimeout(() => {
        setIsFocused(() => false);
      }, 300);
    }
  };

  return (
    <section className="search-field-wrapper">
      <input
        ref={searchInput}
        onFocus={showDropdown}
        onBlur={hideDropdown}
        className="search-input-field"
        name="search-blogs"
        value={value}
        onChange={handleChange}
        placeholder="Enter keywords"
      />

      <span className="input-search-icon">
        <SearchFieldIcon />
      </span>

      {isFocused && (
        <ul className="search-results-dropdown">
          {searchResults.map((searchResult) => (
            <SearchedItem
              key={`search-blog-${searchResult.id}`}
              searchedBlog={searchResult}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default SearchField;

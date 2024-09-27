import { FC, useEffect, useState } from "react";

import SearchField from "../../components/searchField";
import { useDebounce } from "../../hooks/useDebounce";
import NewsCard from "../../components/newsCard";
import Loader from "../../components/loader";
import Button from "../../components/button";
import { getFilterBlogs } from "../../utils";
import { IBlogData } from "../../types/blog";
import { getAllBlogs, getBlogs } from "../../services/blogService";
import { IBlog } from "./types";

import "./styles.scss";

const Home: FC = (): JSX.Element => {
  const blogsInitialState = {
    loading: false,
    page: 1,
    total: 0,
    blogList: [],
    allBlogs: [],
  };

  const [search, setSearch] = useState<string>("");
  const [searchedBlogs, setSearchedBlogs] = useState<Array<IBlogData>>([]);
  const [blogs, setBlogs] = useState<IBlog>(blogsInitialState);

  const searchQuery = useDebounce(search, 2000);

  const fetchBlogList = async () => {
    setBlogs((previousState) => ({
      ...previousState,
      loading: true,
    }));

    const response = await getBlogs(blogs.page, 5);

    if (response?.length > 0) {
      const newBlogs = [...blogs.blogList, ...response];

      setBlogs((previousState) => ({
        ...previousState,
        loading: false,
        blogList: newBlogs,
      }));
    }

    setBlogs((previousState) => ({
      ...previousState,
      loading: false,
    }));
  };

  const loadMoreBlogs = () => {
    setBlogs((previousState) => ({
      ...previousState,
      page: previousState.page + 1,
    }));
  };

  useEffect(() => {
    fetchBlogList();
  }, [blogs.page]);

  const searchBlogs = async () => {
    setSearchedBlogs(() => []);

    if (searchQuery && search.length >= 3) {
      if (blogs.allBlogs.length > 0) {
        setSearchedBlogs(() => getFilterBlogs(blogs.allBlogs, searchQuery));
      }
    }
  };

  useEffect(() => {
    searchBlogs();
  }, [searchQuery]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const allBlogs = await getAllBlogs();

      if (allBlogs.length > 0) {
        setBlogs((previousState) => ({
          ...previousState,
          allBlogs: allBlogs,
          total: allBlogs.length,
        }));
      }
    };

    fetchAllBlogs();
  }, []);

  const handleSearchResults: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSearch(() => e.target.value);
  };

  return (
    <main className="home-page-main-container">
      {blogs.loading && <Loader />}

      <h1 className="app-main-heading">News</h1>

      <SearchField
        value={search}
        handleChange={handleSearchResults}
        searchResults={searchedBlogs}
      />

      <h2 className="page-main-heading">News</h2>

      <section className="news-cards-list-container">
        {blogs.blogList.map((currentBlog) => (
          <NewsCard key={`news-card-${currentBlog.id}`} {...currentBlog} />
        ))}
      </section>

      {blogs.blogList.length < blogs.total && (
        <Button
          classes="inverted"
          name="Load more"
          handleClick={loadMoreBlogs}
        />
      )}
    </main>
  );
};

export default Home;

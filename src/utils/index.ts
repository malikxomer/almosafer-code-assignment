import { IBlogData } from "../types/blog";

export const getFilterBlogs = (
  allBlogs: Array<IBlogData>,
  searchQuery: string
): Array<IBlogData> =>
  allBlogs?.filter((blog: IBlogData) => {
    return blog.title.includes(searchQuery.trim());
  });

export const convertDate = (date: string): string => {
  const mydate = new Date(date);
  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });
  const formatDate = dateTimeFormatter.format(mydate);

  return formatDate;
};

export const containsURL = (text: string) => {
  if (
    new RegExp(
      "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
    ).test(text)
  ) {
    return true;
  }

  return false;
};

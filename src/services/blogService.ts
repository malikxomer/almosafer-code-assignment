import { IBlogData } from "../types/blog";

export const getAllBlogs = async (): Promise<Array<IBlogData>> =>
  await fetch("/data")
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => e);

export const getBlogs = async (
  page: number,
  limit: number
): Promise<Array<IBlogData>> =>
  await fetch(`/data?_page=${page}&_limit=${limit}`)
    .then((response) => response.json())
    .then((blogData) => blogData)
    .catch((e) => e);

export const getBlogWithId = async (id?: string): Promise<IBlogData> =>
  await fetch(`/data?id=${id}`)
    .then((response) => response.json())
    .then((blogData) => blogData[0])
    .catch((e) => e);

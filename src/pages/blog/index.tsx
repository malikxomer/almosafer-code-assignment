import { FC, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getBlogWithId } from "../../services/blogService";
import { IBlogData } from "../../types/blog";
import { containsURL, convertDate } from "../../utils";

import "./styles.scss";
import Button from "../../components/button";

const Blog: FC = (): JSX.Element => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [blogContent, setBlogContent] = useState<IBlogData>();

  const fetchCurrentBlog = async (id?: string) => {
    const blogData = await getBlogWithId(id);

    if (blogData.title) {
      setBlogContent(() => blogData);
    }
  };

  useEffect(() => {
    fetchCurrentBlog(blogId);
  }, [blogId]);

  const navigateToHome = () => {
    return navigate("/");
  };

  return (
    <section className="blog-page-main-container">
      <Link to="/" className="go-back-button">
        {"< Home"}
      </Link>

      <h2 className="blog-header">{blogContent?.title}</h2>

      <figure className="blog-main-image">
        <img
          loading="lazy"
          src="/large.jpg"
          alt={blogContent?.title}
          className="blog-image"
        />
      </figure>

      <p className="blog-posted-info">
        {blogContent && convertDate(blogContent.date)} |{" "}
        {blogContent?.category.name}
      </p>

      <article className="blog-paragraphs-container">
        {blogContent?.body
          .split("\n")
          .map((paragraph: string, index: number) => (
            <p key={`blog-paragraph-${index}`} className="blog-paragraph">
              {containsURL(paragraph) ? (
                <a href={paragraph} target="_blank" rel="noopener noreferrer">
                  {paragraph}
                </a>
              ) : (
                paragraph
              )}
            </p>
          ))}
      </article>

      <Button
        name="Go To Home"
        handleClick={navigateToHome}
        classes="go-home-button"
      />
    </section>
  );
};

export default Blog;

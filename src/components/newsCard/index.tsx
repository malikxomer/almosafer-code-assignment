import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button";
import { IBlogData } from "../../types/blog";
import { convertDate } from "../../utils";

import "./styles.scss";

const NewsCard: FC<IBlogData> = (props): JSX.Element => {
  const { id, title, date, category } = props;

  const navigate = useNavigate();

  const handleReadMore = (id: number) => {
    return navigate(`/blog/${id}`);
  };

  return (
    <section className="blog-card-container">
      <figure className="blog-card-image-container">
        <img
          src="/medium.jpg"
          alt="Something went wrong..."
          loading="lazy"
          className="blog-card-image"
        />
      </figure>

      <article className="news-card-content-container">
        <p className="blog-title">{title}</p>
        <p className="blog-posted-info">
          {convertDate(date)} | {category.name}
        </p>

        <Button name="Read more" handleClick={() => handleReadMore(id)} />
      </article>
    </section>
  );
};

export default NewsCard;

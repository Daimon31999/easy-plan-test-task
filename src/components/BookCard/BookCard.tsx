import { FC } from 'react';
import { Link } from 'react-router-dom';
import './BookCard.scss';

type BookCardPropsType = Record<
  'link' | 'title' | 'imgSrc' | 'subtitle' | 'searchInfo',
  string
>;

const BookCard: FC<BookCardPropsType> = ({
  link,
  title,
  imgSrc,
  subtitle,
  searchInfo,
}) => {
  return (
    <div className="book-card">
      <Link className="book-card-wrapper" to={`book/${link}`}>
        <h1>{title}</h1>
        <img src={imgSrc} alt="book-img" />
        <p>{subtitle}</p>
        <div
          className="search-info"
          dangerouslySetInnerHTML={{ __html: searchInfo }}
        />
      </Link>
    </div>
  );
};

export default BookCard;

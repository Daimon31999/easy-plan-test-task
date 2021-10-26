import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectBooks } from '../../features/books/booksSlice';
import { selectFavoriteBooks } from '../../features/books/favoriteBooksSlice';
import { shortText } from '../../utils/helpers';
import { IIsFavPageProps } from '../../utils/interfaces';
import { messages, TEXT_LENGTH } from '../../utils/global';
import BookCard from '../BookCard/BookCard';
import Spinner from '../Spinner/Spinner';
import './BooksList.scss';

const { bookNotFound: notFound, favBooksListIsEmpty } = messages.errors;

const BooksList: FC<IIsFavPageProps> = ({ isFavPage }) => {
  const { books, status } = useAppSelector(selectBooks);
  const favBooks = useAppSelector(selectFavoriteBooks);

  if (!books) {
    return <h1>{notFound}</h1>;
  }

  if (isFavPage && !favBooks.length) {
    return <h1>{favBooksListIsEmpty}</h1>;
  }

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <div className="books-wrapper">
      {(isFavPage ? favBooks : books).slice(0, 8).map((book) => {
        const { id, volumeInfo, searchInfo } = book;
        const { title, imageLinks, subtitle } = volumeInfo;

        return (
          <BookCard
            key={id}
            link={id}
            title={title}
            imgSrc={imageLinks?.thumbnail}
            subtitle={subtitle}
            searchInfo={shortText(searchInfo?.textSnippet, TEXT_LENGTH)}
          />
        );
      })}
    </div>
  );
};

export default BooksList;

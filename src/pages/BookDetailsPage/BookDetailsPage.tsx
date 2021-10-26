import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Spinner from '../../components/Spinner/Spinner';
import { getBookById, selectBooks } from '../../features/books/booksSlice';
import {
  selectFavoriteBooks,
  toggle,
} from '../../features/books/favoriteBooksSlice';
import { IParams } from '../../utils/interfaces';
import './BookDetailsPage.scss';

const BookDetails: FC = () => {
  const { id } = useParams<IParams>();
  const dispatch = useAppDispatch();
  const { book, status } = useAppSelector(selectBooks);
  const favoriteBooks = useAppSelector(selectFavoriteBooks);

  useEffect(() => {
    dispatch(getBookById(id));
  }, [id, dispatch]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (!book) {
    return <h1>Book not exist!</h1>;
  }

  const handleFavButtonClick = () => {
    dispatch(toggle(book));
  };

  return (
    <div className="book-details">
      <div className="title">
        <h1>{book.volumeInfo?.title}</h1>
        {favoriteBooks.find((b) => b.id === id) ? (
          <IoIosHeart color="red" size={34} onClick={handleFavButtonClick} />
        ) : (
          <IoIosHeartEmpty
            color="red"
            size={34}
            onClick={handleFavButtonClick}
          />
        )}
      </div>
      <h2>{book.volumeInfo?.subtitle}</h2>
      <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="book-thumbnail" />
      <div dangerouslySetInnerHTML={{ __html: book.volumeInfo?.description }} />
    </div>
  );
};

export default BookDetails;

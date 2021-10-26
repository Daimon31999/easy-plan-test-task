import { BooksType, IBookModel } from './interfaces';
import { FAVORITE_BOOKS } from './global';

export const shortText = (text: string, length: number) => {
  if (text) {
    return text.substring(0, length) + '...';
  }
  return '';
};

export const getLocalStorageFavBooks = () => {
  const favBooksStr = localStorage.getItem(FAVORITE_BOOKS);

  if (favBooksStr) {
    return JSON.parse(favBooksStr);
  }

  return [];
};

export const addFavBookToLocalStorage = (book: IBookModel) => {
  if (!getLocalStorageFavBooks()) {
    localStorage.setItem(FAVORITE_BOOKS, JSON.stringify([]));
  }

  localStorage.setItem(
    FAVORITE_BOOKS,
    JSON.stringify([...getLocalStorageFavBooks(), book])
  );
};

export const setFavBookToLocalStorage = (books: BooksType) => {
  localStorage.setItem(FAVORITE_BOOKS, JSON.stringify(books));
};

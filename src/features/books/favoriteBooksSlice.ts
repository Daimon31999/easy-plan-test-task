import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  getLocalStorageFavBooks,
  setFavBookToLocalStorage,
} from '../../utils/helpers';
import { BooksType, IBookModel } from '../../utils/interfaces';

export interface FavoriteBooksState {
  books: BooksType;
}

const initialState: FavoriteBooksState = {
  books: getLocalStorageFavBooks(),
};

export const favoriteBooksSlice = createSlice({
  name: 'favoriteBooks',
  initialState,
  reducers: {
    toggle(state, action: PayloadAction<IBookModel>) {
      const books = state.books;
      const book = action.payload;

      const index = books.map((book) => book.id).indexOf(book.id);

      if (index > -1) {
        books.splice(index, 1);
        setFavBookToLocalStorage(books);
      } else {
        books.push(book);
        setFavBookToLocalStorage(books);
      }
    },
  },
});

export const selectFavoriteBooks = (state: RootState) =>
  state.favoriteBooks.books;

export const { toggle } = favoriteBooksSlice.actions;

export default favoriteBooksSlice.reducer;

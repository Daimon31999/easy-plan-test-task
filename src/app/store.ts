import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';
import favoriteBooksReducer from '../features/books/favoriteBooksSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    favoriteBooks: favoriteBooksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

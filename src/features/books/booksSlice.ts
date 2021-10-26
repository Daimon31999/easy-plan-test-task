import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { message as antdMessage } from 'antd';
import {
  fetchBookByIdRequest,
  fetchSearchedBookRequest,
} from '../../api/requests';
import { RootState } from '../../app/store';
import {
  BookModelNullType,
  BooksType,
  StatusType,
} from '../../utils/interfaces';
import { messages } from '../../utils/global';

export interface BooksState {
  status: StatusType;
  searchInputValue: string;
  books: BooksType;
  book: BookModelNullType;
}

const initialState: BooksState = {
  status: 'idle',
  searchInputValue: 'book',
  books: [],
  book: null,
};

const { getBookByIdFailed, getSearchedBookFailed } = messages.errors;

export const getSearchedBook = createAsyncThunk(
  'books/getSearchedBook',
  async (query: string) => {
    const response = await fetchSearchedBookRequest(query);

    return response?.data;
  }
);

export const getBookById = createAsyncThunk(
  'books/getBookById',
  async (id: string) => {
    const response = await fetchBookByIdRequest(id);

    return response?.data;
  }
);

export const searchBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    changeSearchInput(state, action: PayloadAction<string>) {
      state.searchInputValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookById.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(getBookById.fulfilled, (state, action) => {
      state.status = 'idle';
      state.book = action.payload;
    });

    builder.addCase(getBookById.rejected, (state) => {
      state.status = 'idle';
      antdMessage.error(getBookByIdFailed);
    });

    builder.addCase(getSearchedBook.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(getSearchedBook.fulfilled, (state, action) => {
      state.status = 'idle';
      state.books = action.payload.items;
    });

    builder.addCase(getSearchedBook.rejected, (state) => {
      state.status = 'idle';
      antdMessage.error(getSearchedBookFailed);
    });
  },
});

export const { changeSearchInput } = searchBooksSlice.actions;

export const selectBooks = (state: RootState) => state.books;

export default searchBooksSlice.reducer;

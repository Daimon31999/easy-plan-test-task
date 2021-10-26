import { FC, ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeSearchInput,
  getSearchedBook,
  selectBooks,
} from '../../features/books/booksSlice';
import { SEARCH_INPUT_DELAY_MS } from '../../utils/global';
import './SearchBar.scss';

const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const { searchInputValue } = useAppSelector(selectBooks);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchInput(e.target.value));
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(getSearchedBook(searchInputValue));
    }, SEARCH_INPUT_DELAY_MS);

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchInputValue, dispatch]);

  return (
    <input
      id="search-bar"
      type="text"
      value={searchInputValue}
      onChange={handleSearchInputChange}
      placeholder="type book to search..."
    />
  );
};

export default SearchBar;

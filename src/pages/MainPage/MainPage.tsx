import { FC } from 'react';
import { IIsFavPageProps } from '../../utils/interfaces';
import BooksList from '../../components/BooksList/BooksList';
import SearchBar from '../../components/SearchBar/SearchBar';
import './MainPage.scss';

const MainPage: FC<IIsFavPageProps> = ({ isFavPage }) => {
  return (
    <div className="main-page">
      {!isFavPage && (
        <div className="search-bar">
          <SearchBar />
        </div>
      )}

      <BooksList isFavPage={isFavPage} />
    </div>
  );
};

export default MainPage;

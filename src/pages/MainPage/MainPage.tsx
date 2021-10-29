import { FC } from 'react';
import CardsList from '../../components/CardsList/CardsList';
import './MainPage.scss';

const MainPage: FC = () => {
  return (
    <div className="main-page">
      <CardsList />
    </div>
  );
};

export default MainPage;

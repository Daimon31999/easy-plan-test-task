import { FC } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './utils/global';
import MainPage from './pages/MainPage/MainPage';
import BookDetails from './pages/BookDetailsPage/BookDetailsPage';
import Layout from './Layout/Layout';
import 'antd/dist/antd.css';

const { index, favorites, book } = routes;

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={index} exact>
            <MainPage />
          </Route>
          <Route path={book}>
            <BookDetails />
          </Route>
          <Route path={favorites} exact>
            <MainPage isFavPage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

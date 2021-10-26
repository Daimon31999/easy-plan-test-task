import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { messages, routes } from '../../utils/global';
import './Header.scss';

const { index: indexRoute, favorites: favoritesRoute } = routes;
const { search: searchMsg, favorites: favoritesMsg } = messages.nav;

const Header: FC = () => {
  return (
    <nav id="header-nav">
      <ul>
        <li>
          <NavLink exact to={indexRoute}>
            {searchMsg}
          </NavLink>
        </li>
        <li>
          <NavLink exact to={favoritesRoute}>
            {favoritesMsg}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

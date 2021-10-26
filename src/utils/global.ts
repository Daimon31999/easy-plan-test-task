export const FAVORITE_BOOKS = 'favoriteBooks';
export const TEXT_LENGTH = 50;
export const SEARCH_INPUT_DELAY_MS = 500;

export const routes = {
  index: '/',
  favorites: '/favorites',
  book: '/book/:id',
};

export const messages = {
  errors: {
    bookNotFound: 'Book Not Found ! 😱',
    favBooksListIsEmpty: 'Favorite Books List is Empty ! 😱',
    getBookByIdFailed: 'Get Book by Id Failed !',
    getSearchedBookFailed: 'Get Searched Book Failed !',
  },

  nav: {
    search: 'Search',
    favorites: 'Favorites',
  },
};

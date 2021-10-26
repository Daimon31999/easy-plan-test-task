import axios from 'axios';

export const baseURL = 'https://www.googleapis.com/books/v1';

const apiClient = axios.create({
  baseURL,
});

export default apiClient;

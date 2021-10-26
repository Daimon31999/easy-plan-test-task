import apiClient from './apiClient';
import { IBookModel, IBooksResponse } from '../utils/interfaces';

export function fetchSearchedBookRequest(q: string) {
  return apiClient.get<IBooksResponse>('/volumes', {
    params: {
      q,
    },
  });
}

export function fetchBookByIdRequest(id: string) {
  return apiClient.get<IBookModel>(`/volumes/${id}`);
}

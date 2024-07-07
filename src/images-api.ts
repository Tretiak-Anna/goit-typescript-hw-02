import axios from 'axios';
import { ApiResponse } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImages = async (
  question: string,
  currentPage: number
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>('/search/photos', {
    params: {
      query: question,
      page: currentPage,
      per_page: 12,
      client_id: 'w17w9SF2fMmSkyCaPKTPra6wor4XBee-9hFmGEhkCcA',
    },
  });
  return response.data;
};

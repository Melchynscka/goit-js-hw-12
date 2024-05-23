import axios from 'axios';
const API_KEY = '43798487-cffd9f7a4f04e7c4b426bb2b8';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export const fetchPhoto = async (query = 'cat', newsPage = 1) => {
   const params = new URLSearchParams ({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: newsPage,
  });
 const response = await fetch(`${BASE_URL}/everything?${params}`);
  const data = await response.json();

  if (data.status === 'error') {
    throw new Error(data.code);
  }

  return data;
};


import axios from 'axios';
const API_KEY = '43798487-cffd9f7a4f04e7c4b426bb2b8';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (searchValue = '', page = 1, perPage = 15) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
        searchValue
      )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

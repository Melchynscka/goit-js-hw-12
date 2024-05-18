import axios from 'axios';
const API_KEY = '43798487-cffd9f7a4f04e7c4b426bb2b8';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhoto = async (searchImage, page) => {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: searchImage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  });
  return response.data;
};

export default fetchPhoto;

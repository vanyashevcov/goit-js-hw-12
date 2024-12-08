import axios from 'axios';

export const searchImage = async (search, page, perPage) => {
  const url = `https://pixabay.com/api/`;

  const response = await axios.get(url, {
    params: {
      key: '47161865-40d939b38272e547a09e56cd8',
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: page,
    },
  });

  return response.data;
};

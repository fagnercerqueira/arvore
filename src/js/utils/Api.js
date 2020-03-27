import axios from 'axios';

export default {
  search: function(query, page = 1, qty = 12) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${page}&maxResults=${qty}`,
    );
  },
};

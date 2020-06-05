import axios from 'axios';

const apiKey = '16794185-2b626f9c0a0a64e0d0da5a900';

export default {
  searchQuery: '',
  page: 1,
  axiosArticles(searchQuery) {
    axios.defaults.baseURL = 'https://pixabay.com/api';
    return axios
      .get(`/?key=${apiKey}&q=${this.query}&per_page=12&page=${this.page}`)
      .then(({ data }) => {
        this.incrementPage();
        return data.hits;
      })
      .catch(err => console.log(err));
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};

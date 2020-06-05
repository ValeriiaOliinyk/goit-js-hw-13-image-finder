import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import updateArticlesMarkup from './js/update-markup';
import scrollDocument from './js/scroll';
import openModal from './js/open-modal';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.gallery.innerHTML = '';
  form.reset();
  apiService.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');
  apiService.axiosArticles().then(hits => {
    updateArticlesMarkup(hits);
    scrollDocument();
    refs.loadMoreBtn.classList.remove('is-hidden');
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.axiosArticles().then(hits => {
    updateArticlesMarkup(hits);
    scrollDocument();
  });
});

openModal();

import refs from './refs';
import cards from '../templates/cards.hbs';

function updateArticlesMarkup(hits) {
  const markup = cards(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateArticlesMarkup;

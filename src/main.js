import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { searchImage } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import errorIcon from './img/error.png';

const form = document.querySelector('.form');
const gallery = document.querySelector('ul.gallery');
const loader = document.querySelector('.loader');
const buttonLoadMore = document.querySelector('.button-search-more');
const section = document.querySelector('section');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

iziToast.settings({
  timeout: 4000,
  position: 'topRight',
});

let page = 1;
let perPage = 15;
let searchText = '';
let totalPages = 0;

const scrollGallery = () => {
  const cardHeight = document.querySelector('.gallery-item').offsetHeight;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};

const functionSearch = async first => {
  try {
    if (first) {
      page = 1;
    }

    const { hits, totalHits } = await searchImage(searchText, page, perPage);
    totalPages = Math.ceil(totalHits / perPage);

    if (first) {
      gallery.innerHTML = '';
      buttonLoadMore.style.visibility = 'hidden';
    }

    if (hits.length === 0) {
      iziToast.error({
        iconUrl: errorIcon,
        iconColor: '#fff',
        imageWidth: 24,
        messageColor: '#fff',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.style.display = 'none';
      gallery.innerHTML = '';
      return;
    }

    const images = renderImages(hits);
    gallery.insertAdjacentHTML(first ? 'afterbegin' : 'beforeend', images);

    buttonLoadMore.style.visibility = page < totalPages ? 'visible' : 'hidden';
    page += 1;

    if (!first) {
      scrollGallery();
    }

    lightbox.refresh();
    loader.style.display = 'none';
  } catch (error) {
    loader.style.display = 'none';
    gallery.innerHTML = '';
    iziToast.error({
      iconUrl: errorIcon,
      iconColor: '#fff',
      imageWidth: 24,
      messageColor: '#fff',
      message: error.message,
    });
  }
};

const createGallery = e => {
  e.preventDefault();
  const newSearchText = e.target.elements.search.value.trim();

  if (newSearchText === searchText && searchText !== '') {
    iziToast.warning({
      iconColor: '#fff',
      imageWidth: 24,
      messageColor: '#fff',
      message: 'You are already searching for this query.',
    });
    return;
  }

  if (newSearchText === '') {
    iziToast.error({
      iconUrl: errorIcon,
      iconColor: '#fff',
      imageWidth: 24,
      messageColor: '#fff',
      message: 'Please write a query for search.',
    });
    return;
  }

  searchText = newSearchText;
  loader.style.display = 'block';
  functionSearch(true);
};

const addItemInGallery = () => {
  buttonLoadMore.style.display = 'none';
  loader.style.display = 'block';
  section.insertAdjacentElement('beforeend', loader);
  functionSearch();
};

form.addEventListener('submit', createGallery);
buttonLoadMore.addEventListener('click', addItemInGallery);

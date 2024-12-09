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
      return;
    }

    const images = renderImages(hits);
    gallery.insertAdjacentHTML(first ? 'afterbegin' : 'beforeend', images);

    if (page < totalPages) {
      buttonLoadMore.style.visibility = 'visible';
    } else {
      buttonLoadMore.style.visibility = 'hidden';
      iziToast.info({
        iconColor: '#fff',
        imageWidth: 24,
        messageColor: '#fff',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    page += 1;

    if (!first) {
      const galleryItems = document.querySelectorAll('.gallery-item');
      if (galleryItems.length >= 2) {
        const twoCardsHeight =
          galleryItems[0].getBoundingClientRect().height +
          galleryItems[1].getBoundingClientRect().height;
        window.scrollBy({
          top: twoCardsHeight,
          behavior: 'smooth',
        });
      }
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
  searchText = e.target.elements.search.value.trim();

  if (!searchText) {
    iziToast.error({
      iconUrl: errorIcon,
      iconColor: '#fff',
      imageWidth: 24,
      messageColor: '#fff',
      message: 'Please write a query for search',
    });
    return;
  }

  loader.style.display = 'block';
  buttonLoadMore.style.visibility = 'hidden';
  functionSearch(true);
};

const addItemInGallery = () => {
  loader.style.display = 'block';
  buttonLoadMore.style.visibility = 'hidden';
  functionSearch(false);
};

form.addEventListener('submit', createGallery);
buttonLoadMore.addEventListener('click', addItemInGallery);

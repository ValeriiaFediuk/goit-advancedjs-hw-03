import { searchingRequest } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const loaderContainer = document.querySelector('.loader-container');
const imagesList = document.querySelector('.images-list');
const lightbox = new SimpleLightbox('.images-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let searchParam = {
  key: '45237174-16156409efac0dde2d7dc0545',
  q: null,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

const iziToastError = {
  message: 'Sorry, there are no images matching your search query. Please try again!',
  color: 'red',
  position: 'center',
  progressBar: false,
};

const iziToastWarning = {
  message: 'Please fill the search field',
  color: 'yellow',
  position: 'center',
  progressBar: false,
};

function showLoader() {
  loaderContainer.style.display = 'flex'; // Зміна стилю на flex для відображення контейнера
}

function hideLoader() {
  loaderContainer.style.display = 'none'; // Сховати контейнер
}

form.addEventListener('submit', event => {
  event.preventDefault();
  searchParam.q = event.target.elements.search_key.value.trim();
  event.target.elements.search_key.value = '';
  imagesList.innerHTML = '';

  if (!searchParam.q) {
    iziToast.warning(iziToastWarning);
    return;
  }

  showLoader();

  searchingRequest(new URLSearchParams(searchParam))
    .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.error(iziToastError);
        hideLoader();
        return;
      }

      renderImages(imagesData);
      hideLoader();

      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      hideLoader();
      iziToast.error({
        message: 'An error occurred. Please try again later.',
        color: 'red',
        position: 'center',
        progressBar: false,
      });
    });
});

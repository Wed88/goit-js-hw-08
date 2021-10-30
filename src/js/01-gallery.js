// Add imports above this line
import SimpleLightbox from 'simplelightbox';

import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});

console.log(galleryItems);

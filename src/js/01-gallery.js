// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function galleryCreate(galleryItems) {
  return galleryItems.reduce(
    (acc, { original, preview, description }) =>
      acc +
      `<a class="gallery__item"
      href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>`,
    '',
  );
}

const galletyMarkup = galleryCreate(galleryItems);
galleryEl.innerHTML = galletyMarkup;

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return console.log("It's not a picture");
  }
  var lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    showCounter: false,
    close: false,
  });
}
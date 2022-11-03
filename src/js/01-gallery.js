// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const galleryRef = document.querySelector('.gallery');
const cardsImgGallery = createRenderGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cardsImgGallery);
function createRenderGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>
            </div>`
        })
        .join('')
};
galleryRef.addEventListener('click', onOpenModal);
function onOpenModal(event) {
    event.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return console.log("It's not a picture");
  }

}
var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  showCounter: false,
  close: false,
});















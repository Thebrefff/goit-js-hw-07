import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryView = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup('galleryItems');
galleryView.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup (item) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `<ul class="gallery">
      <li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"/>
      </a>
      </li>     
    </ul>`;
    })
    .join("");
};

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
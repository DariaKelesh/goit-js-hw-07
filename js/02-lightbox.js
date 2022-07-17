import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkUp = galleryItems.map(({ original, preview, description }) => {
    return `<a class="gallery__item" href="${original}"> <img class="gallery__image" src="${preview}" alt="${description}" /> </a>`
}).join("");

galleryRef.innerHTML = galleryMarkUp;

let galleryOrigLink = '';

galleryRef.addEventListener("click", event => {
    event.preventDefault()
});

var lightbox = new SimpleLightbox('.gallery a', { 
    
    captionsData: "alt",
    captionDelay: 250,
 });



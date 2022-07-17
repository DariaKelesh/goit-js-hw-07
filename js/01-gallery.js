import { galleryItems } from './gallery-items.js';
// Change code below this line

// Задание 1 - галерея изображений
// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.


const galleryRef = document.querySelector(".gallery");

const galleryMarkUp = galleryItems.map(({ original, preview, description }) => {
    return `<div class="gallery__item"> <a class="gallery__link" href="${original}"><img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a> </div>`
}).join("");

galleryRef.innerHTML = galleryMarkUp;

let galleryOrigLink = '';

galleryRef.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();
    if (event.target.dataset.source) {
        galleryOrigLink = event.target.dataset.source;
    basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show()
}
}
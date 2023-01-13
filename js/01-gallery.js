import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")

const galleryItemsElements = galleryItems.map(({preview, original, description}) => { return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class = "gallery__image"
      src = "${preview}"
      data-source = "${original}"
      alt = "${description}"
    />
  </a>
</div>`
} ).join("")
gallery.insertAdjacentHTML("beforeend",galleryItemsElements)


gallery.addEventListener("click", openmodal)
// let urlBigPicture = ''
// function openmodal(e){
//     e.preventDefault()
//     urlBigPicture = e.target.dataset.source
//     instance.show(urlBigPicture)
    
// }
    
    
function openmodal(e){
    e.preventDefault()
    const urlBigPicture = e.target.dataset.source
    basicLightbox.create(`
    <img src="${urlBigPicture}">
`).show()
}






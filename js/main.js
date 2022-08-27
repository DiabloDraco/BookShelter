let elInput = document.querySelector(".header__input")
let elTemplate = document.querySelector("#bookTem").content
let elWrapper = document.querySelector(".books__list")
let elResult = document.querySelector(".result__num")
let elForm = document.querySelector(".header__input-wrapper")

elForm.addEventListener("submit" , function (evt) {
    evt.preventDefault()

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${elInput.value}`)
    .then(req => req.json())
    .then(data => {
        render(data.items)
        elResult.textContent = data.totalItems
    })
})

function render(array) {
    elWrapper.innerHTML = null
    let fragment = document.createDocumentFragment()
    for (let i = 0; i < array.length; i++) {
        let template = elTemplate.cloneNode(true)

        template.querySelector(".books__top-img").src = array[i].volumeInfo.imageLinks.thumbnail
        template.querySelector(".books__item-heading").textContent = array[i].volumeInfo.title
        template.querySelector(".books__item-auth").textContent = array[i].volumeInfo.authors
        template.querySelector(".books__item-year").textContent = array[i].volumeInfo.publishedDate
        template.querySelector(".books__bookmark-btn").dataset.bookmarkId = array[i].id
        template.querySelector(".books__read-btn").href = array[i].accessInfo.webReaderLink
        template.querySelector(".books__info-btn").dataset.infoId = array[i].id
        template.querySelector(".books__read-btn").dataset.readId = array[i].id
        
        fragment.appendChild(template)
    }
    elWrapper.appendChild(fragment)
}
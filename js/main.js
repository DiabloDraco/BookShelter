let elInput = document.querySelector(".header__input")
let elTemplate = document.querySelector("#bookTem").content
let elWrapper = document.querySelector(".books__list")


elInput.addEventListener("input" , function (evt) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${elInput.value}`)
    .then(req => req.json())
    .then(data => console.log(data))
})

function render(array) {
    elWrapper.innerHTML = null
    let fragment = document.createDocumentFragment()

    for (let i = 0; i < array.length; i++) {
        let template = elTemplate.cloneNode(true)

        
    }
}
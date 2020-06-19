// create a button and a main div section using create element and append
// inside main element create an image and a link
// button should remove main element on click
let body = document.querySelector('body')
let button = document.createElement('button')
button.append('Remove')
body.append(button)

let main = document.createElement('main')
body.append(main)

let image = document.createElement('img')
image.className = 'image'
image.src = "https://i.imgflip.com/3m153t.png"
main.append(image)
let link = document.createElement('a')
link.append('Do you feel lucky?')
link.href = 'https://www.youtube.com/watch?v=UoVVQk7s6kg'
link.className = 'link'
main.append(link)
button.addEventListener('click', function(){
    main.remove()
})


// Stretch Goals
// Create a 'remove element' button

// To the body, add a text-type <input> and another button. The user will type a valid CSS selector into the text box. When the user clicks this new button, a click event listener should take the text value from the input element and remove the first element from the DOM which matches the CSS selector provided by the user. For example: entering the string .image, then clicking this new button, should remove the image element with the class of "image" from the DOM.
let removeInput = document.createElement('input')
body.append(removeInput)
let removeElementButton = document.createElement('button')
removeElementButton.append('Remove Element')
body.append(removeElementButton)
removeElementButton.addEventListener('click', function(){
    let target = removeInput.value
    let search = document.querySelector(target)
    search.remove()

})

// Create an 'add element' button

// To the body, add another text-type <input> and another new button. When the user clicks this button, it should create a DIV element and append it to the BODY, and should contain the text content provided by the user in the text box.

let addInput = document.createElement('input')
body.append(addInput)
let creationButton = document.createElement('button')
creationButton.append('New Element')
body.append(creationButton)
creationButton.addEventListener('click', function(){
    let newText = addInput.value
    let newDiv = document.createElement('div')
    newDiv.append(newText)
    body.append(newDiv)

})
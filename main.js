// create a button and a main div section using create element and append
// inside main element create an image and a link
// button should remove main element on click
let body = document.querySelector('body')
let main = document.createElement('main')
body.append(main)
let button = document.createElement('button')
button.append('Remove')
body.append(button)
let image = document.createElement('img')
image.className = 'image'
image.src = "https://i.imgflip.com/3m153t.png"
main.append(image)
let link = document.createElement('a')
link.append('Do you feel lucky?')
link.href = 'https://www.youtube.com/watch?v=UoVVQk7s6kg'
main.append(link)
button.addEventListener('click', function(){
    main.remove()
})
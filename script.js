

// audio logic


const playButton = document.getElementById('play') 
const audio = new Audio('assets/audio/thank-u-next-lofi.mp3');
// audio.play();


playButton.addEventListener("click", () => {

    console.log('hello world')
    audio.play();

})

















//lightbox logic

const lightbox = document.createElement('div')

// assigning lightbox element id for styles
lightbox.id = 'lightbox'

// appending lightbox to body
document.body.appendChild(lightbox)

//selecting all images
const images = document.querySelectorAll('img')

//looping through all images, adding event listener to all images
images.forEach(image => {

    //adding eventListener to each image to activate lightbox active style
    image.addEventListener('click', e => {
        lightbox.classList.add('active')

        // creating new image to append to lightbox element
        const img = document.createElement('img')

        //making source of lightbox img the same source as selected images
        img.src = image.src

        //prevent multiple images appearing in lightbox - looping thru all lightbox images and removing them so that.....
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        //appending lightbox img to lightbox element
        lightbox.appendChild(img)
    })
})

//logic for clicking out of lightbox
lightbox.addEventListener('click', e => {

    //what we click on (e.target) is not equal to the element with eventListener (e.currentTarget) - basically when you click on the img the light box DOESNT disappear
    if (e.target !== e.currentTarget) return

    // remove active class when lightbox element is clicked
    lightbox.classList.remove('active')
}) 
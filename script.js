// audio logic

//audio objects
// new Audio('assets/audio/thank-u-next-slow-n-reverb.mp3');
const track = new Audio('assets/audio/thank-u-next-slow-n-reverb.mp3');

const controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else {
        track.pause();
        //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);

track.addEventListener("ended", function () {
    controlBtn.className = "play";
});



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






// text modal sandbox

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
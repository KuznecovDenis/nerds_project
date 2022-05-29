const page = document.querySelector('.page')
const modal = document.querySelector('.modal')
const closeModal = modal.querySelector('.modal-close')
const login = modal.querySelector('[name=login]')
const email = modal.querySelector('[name=email]')
const letter = modal.querySelector('[name=letter]')
const form = document.querySelector('.modal-form')

let isStorageSupport = true
let storageLogin = ''

try {
  storageLogin = localStorage.getItem('login')
}
catch (err) {
  isStorageSupport = false;
}


page.addEventListener('click', function(event) {
  if (event.target.classList.contains('open-modal')) {
    event.preventDefault()
    modal.classList.add('modal-show')

    if (storageLogin) {
      login.value = storageLogin
      email.focus()
    } else {
      login.focus()
    }
  }
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('modal-show')
  modal.classList.remove('modal-error')
})

form.addEventListener('submit', (event) => {
  if(!login.value || !email.value) {
    event.preventDefault()
    modal.classList.remove('modal-error')
    modal.offsetWidth = modal.offsetWidth
    modal.classList.add('modal-error')
  }

  if (isStorageSupport) {
    localStorage.setItem('login', login.value)
  }
})

// slider
const itemsSlider = document.querySelectorAll('.slider-item')
const controlsSlider = document.querySelectorAll('.btn-control')

controlsSlider.forEach(function(item,index) {
  item.addEventListener('click', function() {changeSlide(itemsSlider, controlsSlider, index)})
})

function changeSlide (slides, controls, i) {
  slides.forEach(function(item) {
    if (item.classList.contains('current-slide')) {
      item.classList.remove('current-slide')
    }
  })
  slides[i].classList.add('current-slide')

  controls.forEach(function(item) {
    if (item.classList.contains('current-btn')) {
      item.classList.remove('current-btn')
    }
  })
  controls[i].classList.add('current-btn')
}




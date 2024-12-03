const mobileNavbar = document.querySelector('.navbar_mobile')
const button = document.querySelector('.burguer')

button.addEventListener('click', function() {
  mobileNavbar.classList.toggle('active')
})



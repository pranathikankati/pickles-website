// Author: Pranathi
// This file handles form validation, navbar scroll effect, and mobile menu

// add shadow to navbar when user scrolls down
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar')
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// toggle mobile hamburger menu open and close
function toggleMenu() {
  var menu = document.getElementById('mobileMenu')
  menu.classList.toggle('open')
}

// close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  var menu = document.getElementById('mobileMenu')
  var hamburger = document.getElementById('hamburger')
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open')
  }
})

// form validation function
function validateForm() {

  // reset all errors first
  var errors = document.querySelectorAll('.error')
  errors.forEach(function(e) { e.classList.remove('visible') })

  var inputs = document.querySelectorAll('input, select, textarea')
  inputs.forEach(function(i) { i.classList.remove('input-error') })

  var isValid = true

  // check name field
  var name = document.getElementById('name').value.trim()
  if (name === '') {
    document.getElementById('nameError').classList.add('visible')
    document.getElementById('name').classList.add('input-error')
    isValid = false
  }

  // check phone field - must be exactly 10 digits
  var phone = document.getElementById('phone').value.trim()
  var phoneRegex = /^[0-9]{10}$/
  if (!phoneRegex.test(phone)) {
    document.getElementById('phoneError').classList.add('visible')
    document.getElementById('phone').classList.add('input-error')
    isValid = false
  }

  // check email field - basic email format check
  var email = document.getElementById('email').value.trim()
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').classList.add('visible')
    document.getElementById('email').classList.add('input-error')
    isValid = false
  }

  // check pickle selection
  var pickle = document.getElementById('pickle').value
  if (pickle === '') {
    document.getElementById('pickleError').classList.add('visible')
    document.getElementById('pickle').classList.add('input-error')
    isValid = false
  }

  // check address field
  var address = document.getElementById('address').value.trim()
  if (address === '') {
    document.getElementById('addressError').classList.add('visible')
    document.getElementById('address').classList.add('input-error')
    isValid = false
  }

  // if everything is valid show success message
  if (isValid) {
    document.getElementById('successMsg').classList.add('show')

    // clear the form after success
    document.getElementById('orderForm').reset()

    // scroll to success message
    document.getElementById('successMsg').scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

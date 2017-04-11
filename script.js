var dayTheme = document.getElementById('day')
var nightTheme = document.getElementById('night')
var quantity = parseInt(window.localStorage.getItem('quantity'))
var greeting = document.getElementById('greeting')

if (isNaN(quantity)) {
  quantity = 0
} else {
  quantity = quantity + 1
}
window.localStorage.setItem('quantity', quantity)
greeting.textContent = 'quantity: ' + quantity

function lightTheme () {
  document.body.setAttribute('class', 'day-theme')
  window.localStorage.setItem('class', 'day-theme')
}

function darkTheme () {
  document.body.setAttribute('class', 'night-theme')
  window.localStorage.setItem('class', 'night-theme')
}

var savedTheme = window.localStorage.getItem('class')

if (savedTheme === null) {
  savedTheme = 'night-theme'
} else {
  document.body.setAttribute('class', savedTheme)
  window.localStorage.getItem('class', savedTheme)
}
dayTheme.addEventListener('click', lightTheme)
nightTheme.addEventListener('click', darkTheme)

// fix the functions to change themes, quantity is working :)

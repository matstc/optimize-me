const sortable = require('sortablejs')

document.addEventListener('DOMContentLoaded', function() {
  let dots = document.querySelector('#dots')
  dots.style.position = 'relative'

  let addDot = function() {
    let content = dots.textContent
    dots.textContent = content + " ."
    dots.style.left = Math.random() * 20 - 10
  }

  setInterval(addDot, 17)
})

document.addEventListener('DOMContentLoaded', function() {
  let el = document.getElementById('items');
  sortable.create(el);
})

document.addEventListener('DOMContentLoaded', function() {
  let button = document.querySelector('button')
  button.addEventListener('click', function() {
    let sequence = fibonacciSequence(39)
    let div = document.createElement('div')
    div.textContent = `Your quota is ${sequence[5]}.`
    button.parentNode.appendChild(div, button)
  })
})

function fibonacciSequence(n) {
  let sequence = [];
  for (let i = 0; i <= n; i++) {
    sequence.push(fibonacci(i));
  }
  return sequence;
}

function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

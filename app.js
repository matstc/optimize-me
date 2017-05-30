const sortable = require('sortablejs')
let intervalId = null

document.addEventListener('click', function(e) {
  if (e.target.matches('section#animation button#start')) {
    let objects = []
    const colors = ['red', 'orange', 'blue', 'yellow']

    let addObject = function() {
      let div = document.createElement('div')
      div.style.width = '64px'
      div.style.height = '64px'
      div.style.borderRadius = '50%'
      div.style.position = 'absolute'
      div.style.left = '50px'
      div.style.top = '450px'
      div.style.backgroundColor = colors[parseInt(Math.random() * 4, 10)]
      objects.push(div)
      document.querySelector('section#animation #object-count').textContent = `${objects.length} objects`
      document.querySelector('section#animation').appendChild(div)

      for(let object of objects){
        object.style.left = parseInt(object.style.left) + Math.random() * 10
        object.style.top = parseInt(object.style.top) - Math.random() * 10
      }
    }

    intervalId = setInterval(addObject, 17)
  }

  if (e.target.matches('section#animation button#stop')){
    clearInterval(intervalId)
  }
})

document.addEventListener('DOMContentLoaded', function() {
  let el = document.getElementById('items')
  sortable.create(el)
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
    sequence.push(fibonacci(i))
  }
  return sequence
}

function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

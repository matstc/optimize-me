document.addEventListener('DOMContentLoaded', function(){
  let addDot = function(){
    let dots = document.querySelector('#dots')
    let content = dots.textContent
    dots.textContent = content + " ."
  }

  setInterval(addDot, 1000)
})

window.addEventListener('load', function(){
  let link = document.createElement('link')
  link.href = 'public/second.css'
  link.rel = 'stylesheet'
  document.body.appendChild(link)

  let font = document.createElement('link')
  font.href = 'https://fonts.googleapis.com/css?family=Sansita:400,400i,700,700i,800,800i,900,900i'
  font.rel = 'stylesheet'
  document.body.appendChild(font)
})

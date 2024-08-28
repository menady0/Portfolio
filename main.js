// Dark Mode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const leftCard = document.getElementsByClassName('left-card');
const rightCard = document.getElementsByClassName('right-card');

toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon-fill');
  // leftCard[0].innerHTML = "hi"
  if(this.classList.toggle('bi-brightness-high-fill')){
    body.style.backgroundColor = 'white';
    body.style.color = 'black'

    rightCard[0].style.background = 'white'
    rightCard[0].style.color = 'black'
    rightCard[0].style.boxShadow = "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8"
    
    leftCard[0].style.background = 'white'
    leftCard[0].style.color = 'black'
    leftCard[0].style.boxShadow = "0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8"
    
    document.querySelector('hr').style.borderColor = '#0a0618'
  } else {
    body.style.backgroundColor = 'rgb(18, 18, 18)';
    body.style.color = 'white'

    rightCard[0].style.background = 'rgb(18, 18, 18)'
    rightCard[0].style.color = 'white'
    rightCard[0].style.boxShadow = "0 5px 5px 0 rgba(18, 18, 18, 0.5), 0 0 0 1px #1b1a1a"

    leftCard[0].style.background = 'rgb(18, 18, 18)'
    leftCard[0].style.color = 'white'
    leftCard[0].style.boxShadow = "0 5px 5px 0 rgba(18, 18, 18, 0.5), 0 0 0 1px #1b1a1a"
    document.querySelector('hr').style.borderColor = 'white'
  }
  body.style.transition = '2s'
})


// Testimonial Slider
var btn = document.getElementsByClassName('i-btn');
var slide = document.getElementById('slide');

btn[0].onclick = function(){
  slide.style.transform = 'translateX(0px)'
  for(i = 0; i < 2; i++){
    btn[i].classList.remove('active');
  }
  this.classList.add('active')
}
btn[1].onclick = function(){
  slide.style.transform = 'translateX(-400px)'
  for(i = 0; i < 2; i++){
    btn[i].classList.remove('active');
  }
  this.classList.add('active')
}


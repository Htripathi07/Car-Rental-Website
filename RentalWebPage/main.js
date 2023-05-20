 
 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};


const sr =scrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.heading',{delay:800,origin:'top'})
sr.reveal('.ride-container .box',{delay:600,origin:'top'})
sr.reveal('.services-container .box',{delay:600,origin:'top'})
sr.reveal('.reviews-container .box',{delay:600,origin:'top'})

const revealElements = document.querySelectorAll('.reveal');

// Configure the reveal animation for each element
revealElements.forEach((element) => {
  sr.reveal(element);
});
 const navSlide = () => {
     const burger = document.querySelector('.burger');
     const nav = document.querySelector('.menu');
     const prop1 = document.querySelector('.prop-in-menu-1')
     const prop2 = document.querySelector('.prop-in-menu-2')
     const navLinks = document.querySelectorAll('.menu li');

     burger.addEventListener('click', () => {
         nav.classList.toggle('nav-active');
         prop1.classList.toggle('prop-width');
         prop2.classList.toggle('prop-width');
         navLinks.forEach((link, index) => {
             if (link.style.animation) {
                 link.style.animation = '';
             } else {
                 link.style.animation =
                     `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
             }
         });
         burger.classList.toggle('toggle');
     });
 }
 navSlide();
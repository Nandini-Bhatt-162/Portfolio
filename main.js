/*=================  TOGGLE ICON ON MENU BAR  ========================*/ 


let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navBar.classList.toggle('active')
}


/*=================  ACTIVE SCROLL ON TOGGLE ICON ON MENU BAR  ========================*/ 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach.apply(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

    
/*=================  Sticky Navbar  ========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*=================  Closing the toggle  ========================*/
    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
}

/*=================  Scroll Reveal  ========================*/
ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .project-container, .contact form', {origin: 'bottom'});
 ScrollReveal().reveal('.home-contentt h1, .about-img, .flex-cont', {origin: 'left'});
 ScrollReveal().reveal('.flex-cont', {origin: 'right'});
 ScrollReveal().reveal('.products', {origin: 'left'});
 ScrollReveal().reveal('.timeline-section', {origin: 'top'});
 ScrollReveal().reveal('.home-content p, ', {origin: 'left'});

 
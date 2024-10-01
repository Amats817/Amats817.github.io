//contact button
let contactButton = document.getElementById('contact-button');
contactButton.addEventListener('click', contactScroll);

function contactScroll(){
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
};

//header for mobile
let headerContainer = document.querySelector('.header-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        headerContainer.classList.add('scrolled');
    } else {
        headerContainer.classList.remove('scrolled');
    }
});
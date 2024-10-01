//contact button
let contactButton = document.getElementById('contact-button');
contactButton.addEventListener('click', contactScroll);

function contactScroll(){
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
};

        // =========================menu-iconn=================================================

// Select elements
const menuIconn = document.querySelector('.menu-iconn');
const navMenu = document.querySelector('.navv');

// Toggle functionality
menuIconn.addEventListener('click', () => {
    menuIconn.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// =============================nav bar============================================
window.onscroll = function () {
    var navbar = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};



// =============================Contact Form============================================

const scriptURL = 'https://script.google.com/macros/s/AKfycbx1euS2XYnjBACHZcM2xmdFXZqQXYa6U38EABY09a6pPf0UNDcLq4ddmpo1GSn2VT-1/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset() // Reset the form immediately
            msg.innerHTML = "Thank you! Your message has been sent successfully."
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
        })
        .catch(error => console.error('Error!', error.message))
})
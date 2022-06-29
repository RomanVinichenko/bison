if ($(window).width() < 999) {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 55
        }, 500);
    });
} else {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 500);
    });
}

(function () {
    emailjs.init('Peje_gKxXqc-rxd7b');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_8b26w4b', 'template_edsho5c', this)
            .then(function () {
                console.log('SUCCESS!');
                document.getElementById("contact-form").reset();
                alert('SUCCESS!')
            }, function (error) {
                console.log('FAILED...', error);
                alert('FAILED')
            });
    });
}

const btn = document.querySelector(".menu__burger")
const menu = document.querySelector(    ".menu__list")

const menuLinks = document.querySelectorAll(".menu__link")
menuLinks.forEach(function(menuLink){
    menuLink.addEventListener('click', function () {
        menu.classList.remove('menu__list--active')
        btn.classList.remove('menu__burger--active')
    })
})

btn.addEventListener('click', function () {
    menu.classList.toggle('menu__list--active')
    btn.classList.toggle('menu__burger--active')
})
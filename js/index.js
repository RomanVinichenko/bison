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
const menu = document.querySelector(".menu__list")

const menuLinks = document.querySelectorAll(".menu__link")
menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function () {
        menu.classList.remove('menu__list--active')
        btn.classList.remove('menu__burger--active')
    })
})

btn.addEventListener('click', function () {
    menu.classList.toggle('menu__list--active')
    btn.classList.toggle('menu__burger--active')
})

var sections = $('section')
const nav = $('nav')
const nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('nav__link--active');
            sections.removeClass('HERE');

            $(this).addClass('HERE');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('nav__link--active');
        }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this)
        , id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height + 5
    }, 500);

    return false;
});

$('.logo--footer, .hero__button, .about-section__button').on('click', function () {
    var $el = $(this)
        , id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});

// Toggle Menu
const menu = document.querySelector('.nav__links')
const openMenu = document.querySelector('#open-menu-btn')
const closeMenu = document.querySelector('#close-menu-btn')

function toggleMenu() {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    menu.style.right = '0'
}

closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    menu.style.right = '-100%'
})

var swiperProjects = new Swiper(".projects__container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        // when window width is >= 320px
        380: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
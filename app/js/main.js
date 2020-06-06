$(function(){
// ================ SLIDER ===================
$('.about__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
});
// ================ SLIDER ===================


// ================ MENU BURGER ===================
document.querySelector('.menu__burger').onclick = function(){
    this.classList.toggle('active');
};
// ================ MENU BURGER ===================

  
});
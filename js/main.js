$(function(){


//Слайдер
  // $('.').slick({

  // });




  $('.menu-btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

  $('.header__form-btn').on('click', function () {
    $('.header__form-input').slideToggle();
  });


  


//Добавление класса при клике на элемент
  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass('menu-btn--active');
  })





// загрузка элементов при скролле
new WOW().init();      
});
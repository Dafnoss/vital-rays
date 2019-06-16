
    /*========Window Load Function========*/
    $(window).on("load", function() {
        "use strict";

 /* smooth scroll
  -------------------------------------------------------*/
      $.scrollIt({

        easing: 'swing',
        scrollTime: 900,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -70,
        upKey: 38,
        downKey: 40

      });

      const close = document.querySelector('.popup_close-img');
      const popup = document.querySelector('.popup');
      const call = document.querySelector('.menu_button');

      close.addEventListener('click', function (evt) {
          popup.classList.add('hide')
      });

      call.addEventListener('click', function (evt) {
            popup.classList.remove('hide')
      });

});

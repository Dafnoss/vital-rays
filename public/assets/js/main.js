
    /*========Window Load Function========*/
    $(window).on("load", function() {
        "use strict";

        //Counter randomiser

        const counter1 = document.querySelector('.hero_small-title--highlighted');
        const counter2 = document.querySelector('.sign-highlight_number');

        var currentDate = new Date();
        var date = currentDate.getDate();

        counter1.innerHTML = 31 - date;
        counter2.innerHTML = 31 - date;

        //Popup

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

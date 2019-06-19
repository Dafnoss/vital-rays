
    /*========Window Load Function========*/
    $(window).on("load", function() {
        "use strict";

        //Counter randomiser

        const counters = Array.from(document.querySelectorAll('.counter-tag'));

        const currentDate = new Date();
        const date = currentDate.getDate();
        const currentCounter = 31 - date;

        counters.forEach((element) => {
            element.innerHTML = currentCounter;
        });

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

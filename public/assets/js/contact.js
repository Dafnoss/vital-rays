$(document).ready(function () {
    /*
    function triggerTag () {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'formSubmission', //you can actually name this even whatever you want
            'formID': 'contact-form'
        });
    }

    */


    const valForms = document.querySelectorAll('.submit_form');

    const valArrForms = Array.from(forms);

    console.log(valArrForms);

    valArrForms.forEach(function (element) {
        element.addEventListener('submit', function () {

            $('.submit_form .error').remove();
            var hasError = false;

            var inputs = element.querySelectorAll('.requiredField');

            inputs.forEach(function (element) {
                if (jQuery.trim($(element).val()) == '') {
                    var labelText = $(element).prev('label').text();
                    $(element).parent().append('<span class="error">Вы забыли ввести ' + labelText + '</span>');
                    $(element).addClass('inputError');
                    hasError = true;
                }
            });


            if(!hasError) {
                element.innerHTML = '<p class="success_message">Спасибо, ваш запрос отправлен!<br> Мы свяжемся c Вами в течении 24 часов.</p>';
                element.parentNode.querySelector('.contact_desc').classList.add('hide');
                element.parentNode.querySelector('.contact_support-text').classList.add('hide');

    //            triggerTag();

                return false;
            }

        });

    });

});

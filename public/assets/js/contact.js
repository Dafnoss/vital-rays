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
            $('.requiredField').each(function () {
                if (jQuery.trim($(this).val()) == '') {
                    var labelText = $(this).prev('label').text();
                    $(this).parent().append('<span class="error">Вы забыли ввести ' + labelText + '</span>');
                    $(this).addClass('inputError');
                    hasError = true;
                } else if ($(this).hasClass('email')) {
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if (!emailReg.test(jQuery.trim($(this).val()))) {
                        var labelText = $(this).prev('label').text();
                        $(this).parent().append('<span class="error">You entered an invalid ' + labelText + '</span>');
                        $(this).addClass('inputError');
                        hasError = true;
                    }
                }

            });

            /*
            if(!hasError) {
                $('form#contact-form input.submit').fadeOut('normal', function() {
                    $(this).parent().append('');
                });

                $("#loader").show();
                $.ajax({
                    url: "assets/contact/contact.php",
                    type: "POST",
                    data:  new FormData(this),
                    contentType: false,
                    cache: false,
                    processData:false,
                    success: function(data){
                        $('form#contact-form').slideUp("fast", function() {
                            $(this).before('<div class="success">Thank you. Your Email was sent successfully.<br> We will contact you within 24 hours.</div>');
                            $("#loader").hide();
                        })
                    }
                });


    //            triggerTag();

                return false;
            }

            */

        });

    });

});

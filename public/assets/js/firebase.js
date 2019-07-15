'use strict';

//grab a form
//const form = document.querySelector('#contact-form');

//grab all

const forms = document.querySelectorAll('.submit_form');

const config = {
    apiKey: "AIzaSyDgAExIXf6nM1g-F5FKCs-UN0eQczUtixU",
    authDomain: "vital-rays.firebaseapp.com",
    databaseURL: "https://vital-rays.firebaseio.com",
    projectId: "vital-rays",
    storageBucket: "vital-rays.appspot.com",
    messagingSenderId: "393227834347",
    appId: "1:393227834347:web:a6e46b0fc67b8db2"
};

const getParameterByName = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

let dynamicKeyword = getParameterByName('utm_content') || 'Рекламная компания не известна';

//create a functions to push
function firebasePush(name, phone) {

    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var mailsRef = firebase.database().ref('leads').push().set(
        {
            name: name.value,
            phone: phone.value,
            sickness: dynamicKeyword
        }
    );
}

if (forms) {

    const arrForms = Array.from(forms);

    console.log(arrForms);

    arrForms.forEach((element) => {

        element.addEventListener('submit', function (evt) {
            evt.preventDefault();

            console.dir(element);

            const inputName = element.querySelector('.submit_text');
            const inputPhone = element.querySelector('.submit_tel');

            //push on form submit
            if (inputName.value && inputPhone.value) {
                firebasePush(inputName, inputPhone);

                //shows alert if everything went well.
                //return alert('Data Successfully Sent to Realtime Database');
            }
        })
    });
}
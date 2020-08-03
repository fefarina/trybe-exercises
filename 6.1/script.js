let email = document.querySelector('#email');
let uf = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
let button = document.querySelector('#send');
let buttonClear = document.querySelector('#clear')
let main = document.querySelector('main');
let inputs = document.querySelectorAll('input');


function validaEmail() {
    let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email)) {
        return true
    } else {
        return false;
    }
}

validaEmail();

function preventButton() {
    button.addEventListener('click', function () {
        event.preventDefault();
        populateCv();
    });
};

preventButton();



function populateUF() {
    let select = document.querySelector('#uf');

    for (let i = 0; i < uf.length; i++) {
        let option = document.createElement('option')
        option.innerHTML = uf[i];
        select.appendChild(option);
    }
}

populateUF();


function populateCv() {
    let div = document.createElement('div');
    for (let i = 0; i < inputs.length; i++) {
        let itens = document.createElement('p');
        itens.innerHTML = inputs[i].value;
        div.appendChild(itens)
    }
    main.appendChild(div)
}


function clearAll() {
    let form = document.querySelector("form")
    buttonClear.addEventListener('click', function () {
        event.preventDefault();
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        form.nextElementSibling.remove();
    })
}

clearAll();


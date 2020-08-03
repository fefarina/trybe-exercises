let email = document.querySelector('#email');
let uf = [ "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
             "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
let button = document.querySelector('#send');
let main = document.getElementsByTagName('main');

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
    button.addEventListener('click', function(e) {
        event.preventDefault();
    });
};



function populateUF() {
    let select = document.querySelector('#uf');

    for(let i = 0; i < uf.length; i++) {
        let option = document.createElement('option')
        option.innerHTML = uf[i]; 
        select.appendChild(option);
    }
}

populateUF();


function populateCv() {
    let itens = document.createElement('p');
    itens.innerHTML
}

function changeText() {
    let p = document.querySelector('.firstText');
    
    p.innerText = "Formado e no mercado de Trabalho"
}

changeText();

function changeColor1() {
    document.querySelector('.main-content').style.backgroundColor = "rgb(76,164,109)"
}

changeColor1();

function changeColor2() {
    document.querySelector('.center-content').style.backgroundColor = "#fff";
}

changeColor2();

function changeH1() {
    document.querySelector('h1').innerText = "Exercício 5.1 - JavaScript"
}

changeH1();

function changeP() {
    let paragraph = document.querySelectorAll('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase()
}

changeP();

function changeAllP(){
    let allParagraph = document.querySelectorAll('p');
    
    for (let i = 0; i < allParagraph.length; i++) {
        console.log(allParagraph[i].innerHTML);
    }
}

changeAllP()
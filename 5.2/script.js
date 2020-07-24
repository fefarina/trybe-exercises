
const tagH1 = document.createElement('h1');
tagH1.innerHTML = "Exercicío 5.2 - JavaScript DOM";
document.body.appendChild(tagH1);

const element1 = document.createElement('div')
element1.className = "main-content";
document.body.appendChild(element1);

const elementCenter = document.createElement('div');
elementCenter.className = "center-content";
element1.appendChild(elementCenter);

const elementP = document.createElement('p');
elementP.innerHTML = "Algum Texto";
elementCenter.appendChild(elementP);

const elementLeft = document.createElement('div');
elementLeft.className = "left-content";
element1.appendChild(elementLeft);

const elementRight = document.createElement('div');
elementRight.className = "right-content";
element1.appendChild(elementRight);

const insertImage = document.createElement('img');
insertImage.className = "small-image";
insertImage.src = "https://picsum.photos/200";
elementLeft.appendChild(insertImage);

const list = document.createElement('ul');
elementRight.appendChild(list);

const arrayNumbers = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (index in arrayNumbers) {
    const itensList = document.createElement('li');
    itensList.innerHTML = arrayNumbers[index];
    list.appendChild(itensList);
};

for (let i = 1; i <= 3; i++) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = `Show ${i}`
    element1.appendChild(elementH3);
};

const title = document.getElementsByTagName('h1')[0];
title.className = "title";

const elementsH3 = document.getElementsByTagName('h3');
for (let i = 0; i < elementsH3.length; i++) {
    elementsH3[i].className = 'description';
};

const divLeftContent = document.querySelector('.left-content');
element1.removeChild(divLeftContent);

elementRight.style.marginRight = "auto";

elementCenter.parentNode.style.backgroundColor = "green";

list.lastChild.remove();
list.lastChild.remove();

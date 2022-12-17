function someText(){
    const element = document.getElementById("new-text");
    element.innerHTML = "Hello World";
    element.style.fontSize = '50px';
    element.style.width = '350px';
    element.style.color = 'green';
    element.style.backgroundColor = 'black';
}

someText();

const rotateBox = document.querySelector('.box');
const leftButton = document.querySelector ('.left-btn');
const rightButton = document.querySelector ('.right-btn');



function rotateLeft(){
    rotateBox.style.transform = 'rotate(-180deg)';
}

function rotateRight(){
    rotateBox.style.transform = 'rotate(180deg)';
}

console.log(rotateLeft);
console.log(rotateRight);

leftButton.addEventListener('click', () => rotateLeft());
rightButton.addEventListener('click', () => rotateRight());


const coloredBox = document.querySelector('.color-box');
const text = document.getElementById("same-text");

function colorHoverBox(){
    text.innerHTML = "Hello";
    text.style.opacity = 0;
    text.style.color = 'black';
    text.style.backgroundColor = 'red';
    text.style.height = '100px';
    text.style.cursor = 'pointer';
    text.style.paddingTop = '34px';
    coloredBox.style.width = '350px';
    coloredBox.style.margin = 'auto';
}

coloredBox.addEventListener('mouseover', () => colorHoverBox());

coloredBox.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "orange";
    event.target.style.opacity = 1;
    event.target.style.backgroundColor = "blue";
  
    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
      event.target.style.backgroundColor = "red";
    }, 1000);
  }, false);
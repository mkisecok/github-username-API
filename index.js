
// create all variables 
const body=document.querySelector('body')
const div=document.createElement('div');
const header=document.createElement('h1');
const input=document.createElement('input');
const button=document.createElement('button');
// add all tag in div
body.appendChild(div)
div.appendChild(header);
div.appendChild(input);
div.appendChild(button);
console.log(div);
// set attribute and class
div.classList.add('container','mt-2', 'mx-auto');

header.classList.add('text-center', 'mt-5');

input.setAttribute('type','class', 'placeholder', 'aria-label');
input.type='text';
input.classList.add('form-control');
input.placeholder='username';

button.setAttribute('type','text');
//button.type='text'
button.classList.add('btn', 'btn-primary', 'mt-4');

// add text in h1 and button
header.innerText='Github Username Widget';
button.innerText='Submit';




















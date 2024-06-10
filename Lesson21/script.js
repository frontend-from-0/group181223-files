const entireHtml = document.documentElement.outerHTML;

const bodyHtml = document.body.innerHTML;

const headingElement = document.getElementById('heading');
headingElement.innerText = 'Hello world';
headingElement.setAttribute('class', 'color-red');

headingElement.classList.remove('color-red');



const listItemElements = document.getElementsByClassName('listItem');
console.log(listItemElements);
console.log(listItemElements[1]); 
for(let i = 0; i<listItemElements.length; i++){
    listItemElements[i].innerText = 'List Item ' + (i + 1);
    // listItemElements[i].innerText = `List Item ${ i + 1 }`;
}

const paragraphElements = document.getElementsByTagName('p');
console.log(paragraphElements);

paragraphElements[paragraphElements.length-1].innerText = 'Çalışmaya devam etmeliyiz. pes etmek yok :)';
console.log(paragraphElements);

const linkElement = document.querySelector('a');
console.log(linkElement);

linkElement.setAttribute('href', 'https://google.com');
console.log(linkElement);

const linkElements = document.querySelectorAll('a');


const emailInputs = document.getElementsByName('email');
emailInputs[0].placeholder = 'email adress';
console.log(emailInputs[0]);

console.log(emailInputs[0].nextElementSibling);

const formElement = document.getElementById('formElement');
console.log(formElement.nextElementSibling);

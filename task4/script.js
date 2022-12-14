const userText = prompt('Введите текст');
const userTextField = document.querySelector('h1');
userTextField.textContent = userText;
console.log('Текст в h1 изменён на', userText);
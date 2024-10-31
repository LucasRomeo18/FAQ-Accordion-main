const buttonClick = document.querySelectorAll('button');
const paraclick = document.querySelectorAll('.paragraph');


buttonClick.forEach((button, index) => {
    button.addEventListener('click', () => {
        paraclick[index].classList.toggle('open');
    });
});
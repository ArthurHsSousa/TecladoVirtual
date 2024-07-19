// Criação das constantes para a utilização dos botões
const buttons = document.querySelectorAll('.btn');
const textarea = document.querySelector('textarea');
const btnDel = document.querySelector('.btnDel');
const btnShift = document.querySelector('.btnShift');
const btnSpace = document.querySelector('.btnSpace');

// Variável para o acesso dos caractéres
let chars = [];

// Parte na qual é pega o valor dos botões e adiciona na parte de texto
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText;
        chars = textarea.value.split('')
    })
});

// Parte na qual se utiliza para deletar caractéres na parte de texto
btnDel.addEventListener('click', () =>{
    chars.pop();
    textarea.value = chars.join('')
});

// Parte na qual se utiliza para adicionar espaço entre as palavras
btnSpace.addEventListener('click', () =>{
    chars.push(' ');
    textarea.value = chars.join('')
});

// Parte na qual se utiliza para utilizar as letras em maiúsculo
btnShift.addEventListener('click', () =>{
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
});
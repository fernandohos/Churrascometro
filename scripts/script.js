/* 
cada adulto consome: 
 - 400g de carne
 - 1.2L de cerveja
 - 1L de refrigerante/água

cada adulto consome se a festa tiver mais de 6h:
 - 650g de carne
 - 1.5L de cerveja
 - 1.5L de refrigerante/água

crianças valem por 1/2;

 */

let carne = 400;
let cerveja = 1200;
let bebida = 1000;

let adulto = document.querySelector('#adultos');
let crianca = document.querySelector('#criancas');
let hora = document.querySelector('#horas');


function trocarAnimation(){
    let container = document.getElementsByClassName('container')[0];
    container.style.animationName = 'aaa';
}
function balance(){
    let container = document.getElementsByClassName('container')[0];
    container.style.animationName = 'balance';
}

function verificar(){
    if(adulto.value == 0 && crianca.value == 0 || hora.value == 0) {
        
        balance();
        clearTimeout();
        setTimeout(trocarAnimation, 1000);
        console.log('balancando');
        
    }
    else{
        animation();
    }
}

function atualizar(){
    let horaValue = hora.value;
    if (horaValue >= 6) {
        carne = 650;
        cerveja = 1500;
        bebida = 1200;
    }
    else if (horaValue < 6) {
        carne = 400;
        cerverja = 1200;
        bebida = 1000;
    }
    document.getElementById('carne').innerHTML = (carne * adulto.value)+ (carne / 2 * crianca.value) + "g de carne";
    document.getElementById('cerveja').innerHTML = (cerveja * adulto.value) + "ml de cerveja";
    document.getElementById('bebida').innerHTML = (bebida * adulto.value)+ (bebida / 2 * crianca.value) + "g de carne";
}

function width(){
    let container = document.querySelector('.container');
    container.style.width = '40%';
}

function displayBlock(){
    let result = document.querySelector('.result');
    result.style.animationName = "info-fade-in";
    result.style.display = "block"
    
}

function buttonNone(){
    let btn = document.getElementsByClassName('btn-calcular')[0];
    btn.style.visibility = "hidden";
}

function buttonHidden(){
    let btn = document.getElementsByClassName('btn-calcular')[0];
    btn.style.animationName = "btn-fade-out";
    setTimeout(buttonNone, 1000);
}

function animation() {
    setTimeout(displayBlock, 700);
    setTimeout(width, 900);
    let container = document.querySelector('.container');
    container.style.animationName = 'calcular';
    setTimeout(buttonHidden, 500)
}
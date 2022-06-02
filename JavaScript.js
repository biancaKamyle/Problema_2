let botao = document.querySelector('#resolver');


function resultado()
{   let passo1 = document.querySelector('#passo-a-passo1');
    let passo2 = document.querySelector('#passo-a-passo2');
    
    let coeficienteA = document.querySelector('#m');
    let coeficienteB = document.querySelector('#p');
    let coeficienteC = document.querySelector('#t');
    let m = coeficienteA.value;
    let p = coeficienteB.value;
    let t = coeficienteC.value;
    let resultado = document.querySelector("#resultado-conta");
    let calor = 0;
    let joules = 0;
    let tempo = 0;
    passo1.innerHTML = `${p} = ${m} * ${t} / Δt`;
    passo2.innerHTML = `Δt = ${m} * 4 * ${t} / ${p}`;
    calor = m * 1 * t;
    joules = calor * 4;
    tempo = joules / p;
    
    resultado.value = tempo;
    
}

botao.addEventListener('click', resultado);


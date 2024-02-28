 function areaQuadrado (m){
   return m;
 }

 
 console.log(areaQuadrado(3));


function pi(){
    return 3.14;
}

let total = 5 * pi();


console.log(total);


function imc(peso, altura){
    let imc = peso / (altura*altura);

    return imc;
}

console.log(imc(75, 1.80))




addEventListener('click', function(){
console.log('cliclou');
});



function perimero(lado){
   return lado * 4;
}


console.log(perimero(2));


function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}


console.log(nomeCompleto('Matheus', 'Santos'));

function tipoDado(dado){
    return typeof dado;
}

console.log(tipoDado());


addEventListener('scroll', function(){

    console.log('rolou');
});
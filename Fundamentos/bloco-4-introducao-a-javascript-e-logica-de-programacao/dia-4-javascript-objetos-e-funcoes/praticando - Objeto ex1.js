
//1 - Crie um objeto player contendo as variáveis listadas abaixo.
let player = {
    name:'Marta',
    latsName:'Silva',
    age: 34,
    medals = {golden: 2, silver: 3},
};     
  
//2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: 
// "A jogadora Marta Silva tem 34 anos de idade".
console.log('a jogadora ' + player.name + player.latsName + ' ' +' tem ' player.age + ' de idade');

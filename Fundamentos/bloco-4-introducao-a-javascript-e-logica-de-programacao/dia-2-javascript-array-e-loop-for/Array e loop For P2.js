let pizzas = [' 4 quejos', ' Frango com Catupiry', ' Maguerita', ' Palmito', ' Chocolate'];

pizzas.push(' Peito de Peru'); // Adiciona o novo sabor na ultima posição do Array
pizzas.push(' Gratinada');

// console.log(pizzas[0]);
// console.log(pizzas[1]);
// console.log(pizzas[2]);
// console.log(pizzas[3]);
// console.log(pizzas[4]);

// A estrutura de repetição "for" abaixo tem o mesmo efeito da anterior console.log, porém de forma mais rápida e resumida para um número grande de repetições

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}

//VÍDEO EXPLICATIVO =>  https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-array-e-loop-for/3d453622-6c99-46af-a884-fecc68811230/conteudos/137d5d54-c91a-48c8-bd64-d1a0551608c0/arrays-listas/36ef8665-27b5-42d7-965f-6aedc9f709f1?use_case=next_button

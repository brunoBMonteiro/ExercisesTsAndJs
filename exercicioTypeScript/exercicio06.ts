/* 6. Escreva uma função getMax(arr) que recebe um array de número inteiros e retorna o maior elemento 
encontrado no array. Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos 
disponibilizados pelo TypeScript. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da 
função.
*/
"use strict";

function max(arr:Array<number>) {

    var max = arr.reduce(function(a, b) {
      return Math.max(a, b);
    });
    console.log(max)
    }
    
max([1,800,3,500])
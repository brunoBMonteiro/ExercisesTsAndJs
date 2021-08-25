/*3. Escreva uma função min(x,y)que devolve o menor entre dois números.Não use funções auxiliares de Math.Utilize corretamente a declaração
de tipos nos parâmetros e no resultado da função.*/
function min(x, y) {
    if (x === void 0) { x = 3; }
    if (y === void 0) { y = 5; }
    if (x < y) {
        console.log("X é :" + " " + x);
    }
    else {
        console.log("Y é :" + " " + y);
    }
}
min();
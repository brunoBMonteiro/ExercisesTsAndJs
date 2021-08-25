/*4. Escreva uma função pow(x,y)que calcula o valor de x, ou seja, x elevado a potência y. Assuma que os valores de x e y são números inteiros não negativos e que 0=1para qualquer valor de x.Apresente uma versão iterativa e uma versão recursiva para a função.Não utilize o operador **.
Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função*/

function pow (base, exp){
    var res = 1;
    for (var i = 0; i < exp; i++) {res *= base;}
    console.log(res);    
}

pow(30, 2);

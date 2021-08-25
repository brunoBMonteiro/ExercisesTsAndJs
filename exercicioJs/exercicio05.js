/*5. Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s (assuma qualquer string não vazia) e 
retorna a mesma string com a primeira letra em maiúscula. Utilize corretamente a declaração de tipos nos 
parâmetros e no resultado da função. 
*/
function toMaiusculaPrimeira (name) {

    name = name.toLowerCase().replace(/(?:^|\s)\S/g, 
    
    function(toMaiusculaPrimeira) {
      return toMaiusculaPrimeira.toUpperCase();
    });
    console.log(name);
    }
    
    toMaiusculaPrimeira("bruno")

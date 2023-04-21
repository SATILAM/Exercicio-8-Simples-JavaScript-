# Exercicio-8-Simples-JavaScript.

02 Exemplos de Function Simples utilizando JavaScript.

EXEMPLO-1 function.js:

A função divisores retorna corretamente um array contendo todos os divisores do número passado como parâmetro.

A chamada console.log(divisores(12)) retorna o array [1, 2, 3, 4, 6, 12], que são os divisores do número 12.

A lógica da função é bastante simples: ela utiliza um loop para testar todos os números inteiros de 1 até o número passado como parâmetro (num), 
e verifica se eles são divisores de num utilizando a operação % (que retorna o resto da divisão).

Se o resto da divisão for zero, o número testado é um divisor de num, e é adicionado ao array result utilizando o método push(). 

No final, a função retorna o array result contendo todos os divisores encontrados.

.....................................##...............................................

EXEMPLO-2 function2.js:

A função divisores retorna os divisores de um número, mas na ordem inversa em relação ao exemplo anterior. 

Isso ocorre porque a função começa a testar os divisores a partir do próprio número (num), em vez de começar do número 1.

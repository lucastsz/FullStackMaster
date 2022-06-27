/* 9) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:

  const soma = (num1, num2) => num1+num2
  const calculadoraFn = (....) => ….
  calculadoraFn(10, soma, 20)
  */

const calculadoraFn = (num1, op, num2) => op(num1, num2)

//operacoes
const soma = (num1, num2) => num1 + num2
const subtracao = (num1, num2) => num1 - num2
const divisao = (num1, num2) => num1 / num2
const multiplicacao = (num1, num2) => num1 * num2

console.log(calculadoraFn(10, soma, 20))

// 6) Uma função é chamada da seguinte forma: calculadora(10, '+', 20)  crie o corpo da função de forma que ela realize as 4 operações aritméticas

const calculadora = (num1, op, num2) => {
  //opção mais moderna
  const ops = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2
  }
  return ops[op](num1, num2)

  //opção mais clássica
  /*
  if (op === '+') {
    return num1 + num2
  } else if (op === '-') {
    return num1 - num2
  } else if (op === 'x') {
    return num1 * num2
  } else if (op === '/') {
    return num1 / num2
  }
  */
}

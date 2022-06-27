//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
const vector = [1, 2, 3, 4, 5]

const sum = (current, next) => current + next

const isEven = item => item % 2 === 0

const result = vector.filter(isEven).reduce(sum, 0)

console.log(result)

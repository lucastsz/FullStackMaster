// 3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
const vector = [1, 2, 3, 4, 5]

const sum = (current, next) => current + next

const isOdd = item => item % 2 !== 0

const result = vector.filter(isOdd).reduce(sum, 0)

console.log(result)

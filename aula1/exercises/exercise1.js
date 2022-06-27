//1) Dado um vetor de números, como poderia ser realizada a sum de todos os valores utilizando reduce.
const vector = [1, 2, 3, 4, 5]

const sum = (current, next) => current + next

const result = vector.reduce(sum, 0)

console.log(result)

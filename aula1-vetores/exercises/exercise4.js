// 4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)
const vector = [1, 2, 3, 5, 3, 1, 4, 5, 1, 5, 5]

const howManyTimes = (current, value) => {
  if (!current[value]) {
    current[value] = 0
  }
  current[value] = current[value] + 1
  return current
}

const times = vector.reduce(howManyTimes, {})

console.log(times)

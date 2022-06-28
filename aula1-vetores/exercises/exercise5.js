// 5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)

const vector = [1, 2, 2, 3, 4, 5, 5]

const howManyTimes = (agg, val) => {
  if (!agg[val]) {
    agg[val] = {
      value: val,
      occurences: 0
    }
  }
  agg[val].occurences = agg[val].occurences + 1

  return agg
}

const contagem = vector.reduce(howManyTimes, {})

const keys = Object.keys(contagem)

const unique = keys.filter(key => contagem[key].occurences === 1)

console.log(unique, contagem)

//mapear somente valores específicos

const uniqueValues = unique.map(val => contagem[val].value)

console.log(uniqueValues)

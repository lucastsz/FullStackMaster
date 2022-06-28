// executa após x segundos
setTimeout(() => {
  console.log('Texto após 2 segundos')
}, 2000)

// executa a cada x segundos
setInterval(() => {
  console.log('Teste')
}, 5000)

//
let count = 0
let interval = setInterval(() => {
  console.log('Olá Lucas')
  count++

  if (count > 5) {
    clearInterval(interval)
  }
}, 1000)

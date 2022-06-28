/*
3) A lista de arquivos retornado no exercício anterior, também retorna diretórios. Crie uma função que retorne todos os sub-diretórios em um vetor (deve-se ignorar os arquivos retornados pelo readdir).

Algumas funções do fs e de Promises que te ajudarão:

    fs.stat(caminhoArquivoDiretorio, (err, stats) => {})
    stats que é retornado no callback possui um isDirectory() e um isFile()
        (sou bonzinho né, cantei a pedra aqui ;) )
    Promise.all(vetorDePromises): aguarda um vetor de promises ser executado, e retorna uma promise que retorna para um vetor com o resultado.
    Ex:

   Promise.all([promise1, promise2]).then( results => {

     results[0] // resultado de promise1

     results[1] // resultado de promise2

   })

    este exercício é um pouco mais desafiador; é normal ter um pouco de dificuldade
*/

const fs = require('fs')
const { resolve } = require('path')
const readdir = caminho =>
  new Promise((resolve, reject) => {
    fs.readdir(caminho, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })

const stat = caminho =>
  new Promise((resolve, reject) => {
    fs.stat(caminho, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        resolve(stats)
      }
    })
  })

const isDirectory = async caminho => {
  const stats = await stat(caminho)
  return stats.isDirectory() ? caminho : false
}
const execute = async () => {
  const files = await readdir('./')
  const possibleDirectories = await Promise.all(files.map(f => isDirectory(f)))
  const directories = possibleDirectories.filter(val => val)
  console.log(directories)
}
execute()

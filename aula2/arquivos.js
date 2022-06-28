const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

//  Promises + async/await (melhor solução)
//  Promises:
const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })

const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })

//async/await
const copyFile = async () => {
  const data = await readFile('aula2/temporizadores.js')
  await writeFile('aula2/copy-async-await.js', data)
  console.log('arquivo lido')
}
copyFile().then(() => console.log('fim do async/await'))

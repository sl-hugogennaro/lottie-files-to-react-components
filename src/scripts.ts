import { readdir, readFile } from 'fs'

export const getFileContent = (filePath: string): Promise<string> =>
  new Promise((res, rej) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (!!err) {
        rej(err)
      }
      res(data)
    })
  })

export const getDirFiles = (dirPath: string): Promise<string[]> =>
  new Promise((res, rej) => {
    readdir(dirPath, (err, files) => {
      if (!!err) {
        rej(err)
      }
      res(files)
    })
  })

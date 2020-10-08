import { resolve } from 'path'
import { getDirFiles, getFileContent } from './scripts'

const lottieFilesPath = './src/lotties'
const templatePath = './src/file.tsx.template'
const run = async () => {
  try {
    const path = resolve(lottieFilesPath)
    const template = await getFileContent(resolve(templatePath))
    console.log(template)
    // const files = await getDirFiles(path)
    // for (const file of files) {
    //   const content = await getFileContent(resolve(path, file))
    // }
  } catch (e) {
    console.error(e)
  }
}

run()

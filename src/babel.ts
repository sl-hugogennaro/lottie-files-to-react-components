import template from '@babel/template'
import generate from '@babel/generator'
import * as t from '@babel/types'
import { readFile } from 'fs'
import { resolve } from 'path'

readFile(resolve('./src/file.tsx.template'), 'utf8', (err, data) => {
  if (!!err) throw err

  const buildRequire = template(data)
  console.dir(buildRequire)
  // const ast = buildRequire({
  //   componentName: '',
  //   jsx: ``,
  //   exports: '',
  //   // importName: t.identifier('myModule'),
  //   // source: t.stringLiteral('my-module'),
  // })

  // @ts-ignore
  // console.log(generate(ast).code)
})

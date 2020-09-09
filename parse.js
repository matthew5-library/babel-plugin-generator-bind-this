var babel = require('@babel/core')
var fs = require('fs')
var t = babel.types

var demoCode = `
  function Test() {
    this.bindValue = 'class value'
    this.saga1 = createSaga(function* getContacts(action) {
      console.log(action, this.bindValue)
    })
  }
  `

const ast = babel.parse(demoCode)
// fs.writeFileSync('./demoCode2.json', JSON.stringify(ast))

const functionExpression = ast.program.body[0]
const bindIdentifier = t.identifier('bind')
const memberExpression = t.memberExpression(functionExpression, bindIdentifier)
const thisArguments = t.thisExpression()
const callExpression = t.callExpression(memberExpression, [thisArguments])

// fs.writeFileSync('./statement.json', JSON.stringify(statement))

const { code } = babel.transformFromAstSync(ast)

console.log(code)

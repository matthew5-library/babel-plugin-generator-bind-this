var babel = require('@babel/core')
var fs = require('fs')
var t = babel.types

var demoCode = `
  function Test() {
    var _this = this
    _this.bindValue = 'class value'
    _this.result1 = doSomething((function* (param) {
      console.log(param, this.bindValue)
    }).bind(_this))
  }
  `

const ast = babel.parse(demoCode)
fs.writeFileSync('./parse.json', JSON.stringify(ast))
return

const functionExpression = ast.program.body[0]
const bindIdentifier = t.identifier('bind')
const memberExpression = t.memberExpression(functionExpression, bindIdentifier)
const thisArguments = t.thisExpression()
const callExpression = t.callExpression(memberExpression, [thisArguments])

// fs.writeFileSync('./statement.json', JSON.stringify(statement))

const { code } = babel.transformFromAstSync(ast)

console.log(code)

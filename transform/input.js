const doSomething = (method) => {
  return {
    bindValue: 'scope value',
    method
  }
}

class Base {}

class Test extends Base {
  bindValue = 'class value'
  result1 = doSomething(function* (param) {
    console.log(param, this.bindValue)
  })

  result2 = doSomething(
    function* (param) {
      console.log(param, this.bindValue)
    }.bind(this)
  )
}

const ins = new Test()
ins.result1.method('case1').next()
ins.result2.method('case2').next()

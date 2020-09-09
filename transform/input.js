const createSaga = (method) => {
  method.bindThis = true
  return {
    bindValue: 'scope value',
    method
  }
}

class Base {}

class Test extends Base {
  bindValue = 'class value'
  saga1 = createSaga(function* getContacts(action) {
    console.log(action, this.bindValue)
  })

  saga2 = createSaga(
    function* getContacts(action) {
      console.log(action, this.bindValue)
    }.bind(this)
  )
}

const ins = new Test()
ins.saga1.method('action1').next()
ins.saga2.method('action2').next()

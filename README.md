### Why

1. generator cannot use arrow-function
2. how to use this in generator by some special case  
   in this case the generator in `result1` cannot use class property, and result2 can use this
3. bind this by yourself or automatically by plugin

```js
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
```

### Demo

`yarn transform`, check the output in `transform/output.js`

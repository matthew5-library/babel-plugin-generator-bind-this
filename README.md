### Usage

1. `yarn add babel-plugin-generator-bind-this -D`

2. activate in .babelrc

```json
{
  "plugins": ["babel-plugin-generator-bind-this"]
}
```

### Why

1. generator cannot use arrow-function
2. check the special case below:  
   in this case the generator in `result1` cannot get class property `bindValue` `"class value"`, but got `"scope value"`, and result2 can get `"class value"`
3. `generator.bind(this)` by yourself or automatically by this plugin

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

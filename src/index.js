module.exports = function (babel) {
  const t = babel.types
  return {
    visitor: {
      FunctionExpression: {
        enter: function (path) {
          const { node } = path
          if (!node.generator) return

          const functionExpression = t.cloneNode(node)
          const bindIdentifier = t.identifier('bind')
          const memberExpression = t.memberExpression(
            functionExpression,
            bindIdentifier
          )
          const thisArguments = t.thisExpression()
          const callExpression = t.callExpression(memberExpression, [
            thisArguments
          ])

          if (
            t.isMemberExpression(path.parent) &&
            t.isIdentifier(path.parent.property) &&
            path.parent.property.name === 'bind'
          ) {
            return
          }

          path.replaceWith(callExpression)
          //   path.parent.arguments = [callExpression]
        }
      }
    }
  }
}

module.exports = function (babel) {
  const t = babel.types

  const getAssignmentLeftObject = function (path) {
    const assignmentNode = path.parentPath.parent
    if (
      assignmentNode &&
      t.isAssignmentExpression(assignmentNode) &&
      assignmentNode.operator === '='
    ) {
      if (t.isIdentifier(assignmentNode.left.object)) {
        return t.identifier(assignmentNode.left.object.name)
      } else if (t.isThisExpression(assignmentNode.left.object)) {
        return t.thisExpression()
      }
    }

    return t.thisExpression()
  }

  return {
    visitor: {
      FunctionExpression: {
        enter: function (path) {
          const { node } = path
          if (!node.generator) return
          if (
            t.isMemberExpression(path.parent) &&
            t.isIdentifier(path.parent.property) &&
            path.parent.property.name === 'bind'
          ) {
            return
          }

          const functionExpression = t.cloneNode(node)
          const bindIdentifier = t.identifier('bind')
          const memberExpression = t.memberExpression(
            functionExpression,
            bindIdentifier
          )
          const thisArguments = getAssignmentLeftObject(path)
          const callExpression = t.callExpression(memberExpression, [
            thisArguments
          ])

          path.replaceWith(callExpression)
        }
      }
    }
  }
}

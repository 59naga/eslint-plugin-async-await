function checkSpace(context, node, message) {
  const sourceCode = context.getSourceCode(node);
  const [identifier, punctuator] = sourceCode.getFirstTokens(node, 2);
  const hasntSpace = identifier.range[1] === punctuator.range[0];
  if (hasntSpace) {
    context.report({
      node,
      message,
      // @see http://eslint.org/docs/developer-guide/working-with-rules#applying-fixes
      fix(fixer) {
        return fixer.insertTextAfter(identifier, ' ');
      },
    });
  }
}

// @see http://eslint.org/docs/developer-guide/working-with-rules#the-context-object
export default {
  rules: {
    'space-after-async': (context) => ({
      ArrowFunctionExpression(node) {
        if (node.async) {
          checkSpace(context, node, 'Missing space after async');
        }
      },
      CallExpression(node) {
        if (node.callee.name === 'async') {
          checkSpace(context, node, 'Missing space after async');
        }
      },
    }),
    'space-after-await': (context) => ({
      YieldExpression(node) {
        const sourceCode = context.getSourceCode(node);
        const identifier = sourceCode.getFirstToken(node);
        if (identifier.value === 'await') {
          checkSpace(context, node, 'Missing space after await');
        }
      },
    }),
  },
  rulesConfig: {
    'space-after-async': 0,
    'space-after-await': 0,
  },
};

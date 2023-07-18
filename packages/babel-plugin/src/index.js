import generate from "@babel/generator";
import { generateStyles } from "@fast-styles/core";

export default function babelPluginWithStyles({ types: t, parse }) {
  return {
    visitor: {
      CallExpression(path) {
        if (t.isIdentifier(path.node.callee, { name: "styled" })) {
          // get styles object
          const objectNode = path.node.arguments[1];
          const styledObjectCode = generate(objectNode).code;
          const styledObject = eval(`(${styledObjectCode})`);
          const stylesToInject = generateStyles(styledObject);

          // to ast
          const parsedNode = parse(
            `const x = ${JSON.stringify(stylesToInject)}`
          );
          const objectExpression =
            parsedNode.program.body[0].declarations[0].init;

          // dependencies extractor
          const variantKeys = Object.keys(styledObject.variants).sort();
          const propsIdentifier = t.identifier("props");
          const properties = ["style", ...variantKeys].map((prop) =>
            t.memberExpression(propsIdentifier, t.identifier(prop))
          );

          const arrowFunction = t.arrowFunctionExpression(
            [propsIdentifier],
            t.arrayExpression(properties)
          );
          path.node.arguments[2] = objectExpression;
          path.node.arguments[3] = arrowFunction;
        }
      },
    },
  };
}

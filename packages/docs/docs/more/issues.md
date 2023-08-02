---
sidebar_position: 2
---

# Common issues

### 1. Transpilation warning: You used an identifier as an argument for the styled HOC

This is because the Babel plugin needs easy access to variants and compound variants to generate the style map. If you generate the code at runtime, you won't have this problem, but it won't be as performant.

### 2. Transpilation error: styled argument must be an object expression

You are calling the `styled` HOC with an argument that is neither an identifier nor an object. Try refactoring your code using an object supported by the styled API.

### 3. Transpilation error: Expected StringLiteral or Identifier and Invalid type for propertyName

The **keys** of specific attributes in `styled` (such as variants, options, compound variants, and style props) must be literals or identifiers. You cannot use spreads or dynamic keys in these fields.

### 4. I have an issue with the Babel plugin, and I can't resolve it.

If you have a problem with the Babel plugin and can't resolve it, you can try resolving the styles for that component at runtime. To do this, add a comment with the rule `//fast-styles-runtime-next` on the line before the styled call.

You can report it as an issue on GitHub, and we will assist you in finding a solution.

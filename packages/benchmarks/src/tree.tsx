import { DeepComponent } from "./types";

export function createTree(Component: DeepComponent): any {
  const Tree = ({ depth = 6, index = 0 }) => {
    return (
      <Component
        colorScheme={`color${index % 3}`}
        layout={depth % 2 === 0 ? "column" : "row"}
      >
        {depth === 0 && (
          <Component colorScheme={`color${(index % 3) + 3}`} layout="fixed" />
        )}
        {depth !== 0 &&
          Array.from({ length: 3 }).map((_, i) => (
            <Tree depth={depth - 1} index={i} key={i} />
          ))}
      </Component>
    );
  };
  return Tree;
}

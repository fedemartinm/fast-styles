export type DeepComponent = React.FC<{
  colorScheme: `color${number}`;
  layout: "column" | "row" | "fixed";
  children?: any;
}>;

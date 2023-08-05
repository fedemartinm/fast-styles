import { css, styled } from "styled-components/native";

const getColor = (color) => {
  switch (color) {
    case "color0":
      return "#14171A";
    case "color1":
      return "#AAB8C2";
    case "color2":
      return "#E6ECF0";
    case "color3":
      return "#FFAD1F";
    case "color4":
      return "#F45D22";
    case "color5":
      return "#E0245E";
    default:
      return "transparent";
  }
};

const columnStyles = css`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 4px;
`;

const rowStyles = css`
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  padding: 4px;
  flex: 1;
`;

const fixedStyles = css`
  width: 4px;
  height: 4px;
`;

export const StyledComponent = styled.View<{
  layout: any;
  colorScheme: any;
}>`
  ${(props) => props.layout === "column" && columnStyles};
  ${(props) => props.layout === "row" && rowStyles};
  ${(props) => props.layout === "fixed" && fixedStyles};
  background-color: ${(props) => getColor(props.colorScheme)};
`;

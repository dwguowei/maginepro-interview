import {ReactNode} from "react";
import styled from "styled-components";

interface Props {
  whiteSpace: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line" | "break-spaces"
}
const LabelStyle = styled.label<Props>`
  font-weight: 700;
  white-space: ${props => props.whiteSpace};
`;

function Label ({whiteSpace = "normal", children}: {whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line" | "break-spaces", children: string | ReactNode[] | ReactNode}) {
  return (
    <LabelStyle whiteSpace={whiteSpace} >{children}</LabelStyle>
  )
}

export default Label

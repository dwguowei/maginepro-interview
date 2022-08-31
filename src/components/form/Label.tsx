import {ReactNode} from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
    font-weight: 700;
`;

function Label ({children}: {children: string | ReactNode[] | ReactNode}) {
  return (
    <LabelStyle>{children}</LabelStyle>
  )
}

export default Label

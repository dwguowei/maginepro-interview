import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  appearance: none;
  background-color: ${({ theme }) => theme.input.background};
  border-color: ${({ theme }) => theme.input.border};
  border-radius:8px;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  outline: none;
  color: ${({ theme }) => theme.input.text};
  caret-color: ${({ theme }) => theme.input.text};
  :focus {
    border-color: ${({ theme }) => theme.input.focus.border};
    border-width: 2px;
    padding: 9px
  }
`;

function Label (params: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputStyle {...params} />
  )
}

export default Label

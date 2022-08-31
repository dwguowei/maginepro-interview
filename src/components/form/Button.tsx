import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border-radius:8px;
  padding: 10px;
  background-color: ${({ theme }) => theme.button.main.background};
  color: ${({ theme }) => theme.button.main.text};
  border: none;
  cursor: pointer;
  :disabled{
    background-color: ${({ theme }) => theme.button.disabled.background};
    color: ${({ theme }) => theme.button.disabled.text};
  }
`;

function Label (params: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonStyle {...params}>{params.children}</ButtonStyle>
  )
}

export default Label

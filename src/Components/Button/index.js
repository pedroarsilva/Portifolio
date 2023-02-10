import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    overflow: hidden;
    i{
        margin-left: .6rem;
    }
`;

function Button({name, blob, color, icon, bg, bFw, bRad, bPad}) {
  const theme = useTheme()

  return (
    <ButtonStyled theme={theme}>
      {name}
      {icon}
      <div className={blob}></div>
    </ButtonStyled>
  )
}

export default Button;

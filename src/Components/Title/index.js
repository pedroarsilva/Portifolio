import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';

const TitleStyled = styled.div`

`;

function Title({name, desc}) {
  const theme = useTheme()

  return (
    <TitleStyled theme={theme}>
        <h2>{name}</h2>
        <p>{desc}</p>
    </TitleStyled>
  )
}

export default Title;
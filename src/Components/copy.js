import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';

const HeaderStyled = styled.div`

`;

function Header() {
  const theme = useTheme()

  return (
    <HeaderStyled theme={theme}>
      
    </HeaderStyled>
  )
}

export default Header;

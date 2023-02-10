import React from 'react';
import styled from "styled-components";
import { useTheme } from 'styled-components';

const HeaderStyled = styled.header`

`;

function Header() {
  const theme = useTheme()

  return (
    <HeaderStyled theme={theme}>
      
    </HeaderStyled>
  )
}

export default Header;

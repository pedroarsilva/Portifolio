import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';

const PortfolioItemStyled = styled.div`

`;

function PortfolioItem() {
  const theme = useTheme()

  return (
    <PortfolioItemStyled theme={theme}>
      
    </PortfolioItemStyled>
  )
}

export default PortfolioItem;

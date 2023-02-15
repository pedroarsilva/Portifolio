// 1:57:39
import React from 'react';
import styled from "styled-components";
import Title from '../../Components/Title';
import { useTheme } from '../../context/themeContext';
import { PagesLayout } from '../../styles/Layouts';

const ServicesStyled = styled.div`

`;

function Services() {
  const theme = useTheme()

  return (
    <ServicesStyled theme={theme}>
        <Title 
            name={'Services'}
            desc={'Contrary to popular belief, Lorem Ipsum is not simply random text.'}
        />
        <div className='services-con'>

        </div>
    </ServicesStyled>
  )
}

export default Services;

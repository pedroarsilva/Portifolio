// 30:08
import React from 'react';
import styled from "styled-components";
import { useTheme } from 'styled-components';
import Button from '../Button';
import { brief } from '../../utils/icons'


const HeaderStyled = styled.header`

`;

function Header() {
  const theme = useTheme()

  return (
    <HeaderStyled theme={theme}>
      <div className='left-header'>
        <div className='left-h-content'>
          <h2>Hi,</h2>
          <h1>I am Pedro<span>.</span></h1>
          <p className='profession'>Software Enginner</p>
          <p className='description'>
            I am an aspiring software enginner ReactJS, web designer
            and a web developer. I can provide clear code and pixel
            perfect designs.
          </p>
          <div className='btn-con'>
            <Button 
              name={'Hire Me'}
              blob={'blob'}
              bg={theme.colorPrimary}
              color={theme.colorWhite}
              bFw={'600'}
              bRad={'30px'}
              bPad={theme.pad1}
              icon={brief}
            />
          </div>
        </div>
      </div>
      <div className='right-header'></div>
    
    </HeaderStyled>
  )
}

export default Header;

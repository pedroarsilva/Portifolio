// 1:05
import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';

const NavigationStyled = styled.nav`
  position: fixed;
  transition: all .3s ease-in-out;
  left: 50%;
  top: 0;
  background-color: red;
  min-height: 10vh;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
  width: 850px;
  background-color: ${(props) => props.theme.colorBg2};
  margin: 0 auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 12;

  .nav-items{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

function Navigation() {
  const theme = useTheme()

  return (
    <NavigationStyled theme={theme}>
      <ul className='nav-items'>
        <li className='nav-item'>
          <a href='#'>Home</a>
        </li>
        <li className='nav-item'>
          <a href='#about'>About</a>
        </li>
        <li className='nav-item'>
          <a href='#services'>Services</a>
        </li>
        <li className='nav-item'>
          <a href='#experience'>Experience</a>
        </li>
        <li className='nav-item'>
          <a href='#portfolios'>Portfolios</a>
        </li>
        <li className='nav-item'>
          <a href='#blogs'>Blogs</a>
        </li>
        <li className='nav-item'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </NavigationStyled>
  )
}

export default Navigation;

// 30:08
import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import Button from '../Button';
import { brief } from '../../utils/icons';
import AnonymousDark from '../../img/AnonymousDark.jpg';
import line from '../../img/line.png';
import Particle from '../Particles';


const HeaderStyled = styled.header`
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 1rem 18rem;
  /* margin-right: -13rem; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  .left-header{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 5;
    
    h2{
      font-size: 4.5rem;
      color: ${(props) => props.theme.colorPurple};
    }
    
    h1{
      /* font-size: 6rem; */
      font-size: clamp(4rem, 5vh, 6rem);
      
      span{
        color: ${(props) => props.theme.colorPrimary}
      }
    }
    
    .profession{
      font-style: 2rem;
      font-weight: 500;
      color: ${(props) => props.theme.colorGreen}
    }
    
    .description{
      margin-top: 1rem;
      color: ${(props) => props.theme.colorGrey1};
      margin-bottom: 2rem;
      line-height: 2rem;
      /* text-align-last: left; */
    }
  }

  .image-con{
    position: absolute;
    right: 0;
    bottom: -7px;
    z-index: 2;
    
    img{
      width: 900px;
      filter: grayscale(100%) drop-shadow(5px - 5px 20px rgba(0,0,0, 0.65));
    }
  }

  .image-overlay{
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    background: ${(props) => props.theme.colorBg};
    z-index: 3;
    opacity: 0.3;
  }

  .image-line{
    position: absolute;
    right: 0;
    top: -15%;
    width: 105%;
    z-index: 1;
    /* opacity: 0.5; */

  }
`;

function Header() {
  const theme = useTheme()

  return (
    <HeaderStyled theme={theme}>
      <div className='particles-con'>
      <Particle />
      </div>
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
              bPad={theme.bPad1}
              icon={brief}
            />
          </div>
        </div>
      </div>
      <div className='right-header'></div>
      <div className='image-con'>
        <img src={AnonymousDark} alt="" />
      </div>
      <div className="image-overlay"></div>
      <img src={line} alt="" className="image-line" />
    </HeaderStyled>
  )
}

export default Header;

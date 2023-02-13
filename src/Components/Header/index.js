
import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import Button from '../Button';
import { brief } from '../../utils/icons';
import capuz from '../../img/capuz.png';
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
  
  .particles-con{
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  
  .burger-menu{
    position: fixed;
    top: 2rem;
    right: 3rem;
    display: flex;
    flex-direction: column;
    z-index: 11;
    cursor: pointer;

    .line{
      width: 35px;
      height: 4px;
      background-color: ${(props) => props.theme.colorPrimary};
      margin-bottom: 5px;
      border-radius: 7px;
      transition: all .3s ease-in-out;
      display: flex;
      box-shadow: 0 3px 5px rgba(0,0,0, 0.5);
      &:last-child{
        margin-bottom: 0;
        width: 20px;
        align-self: flex-end;
      }
    }
    &:hover{
      .line:last-child{
        width: 35px;
      }
      }
    }
    

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

function Header({toggle, setToggle}) {
  const theme = useTheme()

  return (
    <HeaderStyled theme={theme}>
      <div className='particles-con'>
      <Particle />
      </div>
      <div className='burger-menu' onClick={() => {setToggle(!toggle)}}>
        <div className='line line1'></div>
        <div className='line line2'></div>
        <div className='line line3'></div>
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
        <img src={capuz} alt="" />
      </div>
      <div className="image-overlay"></div>
      <img src={line} alt="" className="image-line" />
    </HeaderStyled>
  )
}

export default Header;

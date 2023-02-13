import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import { PagesLayout } from '../../styles/Layouts';
import pedro2 from '../../img/pedro2.png'
import { download } from '../../utils/icons';
import Title from '../../Components/Title';
import Button from '../../Components/Button';



const AboutStyled = styled(PagesLayout)`
    background-color: ${(props) => props.theme.aboutBg};
    position: relative;
    overflow: hidden;

    .about-info{
        display: flex;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        z-index: 5;

        .about-image{
            padding: .8rem;
            background: ${(props) => props.theme.colorBg3};
            border-radius: 5px;
            width: 200%;
            
            img{
                width: 100%;
            }
        }
    }
`;

function About(){
  const theme = useTheme()

  return (
    <AboutStyled theme={theme}>
      <div className='about-info'>
        <div className='about-image'>
            <img src={pedro2} alt="" />
        </div>
        <div className='about-content'>
            <Title name={'About Me'} />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of 
            type and scrambled it to make a type specimen book.
            </p>
            <div className='btn-con'>
                <Button 
                    name="Download CV"
                    blob="blob"
                    icon={download}
                    bg={theme.colorPrimary}
                    color={theme.colorWhite}
                    bFw={'600'}
                    onClick="onClick"
                    bRad={'30px'}
                    bPad={theme.bPad1}
                />
            </div>
        </div>
      </div>
    </AboutStyled>
  )
}

export default About;

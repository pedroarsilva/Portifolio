import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import { PagesLayout } from '../../styles/Layouts';
import pedro2 from '../../img/pedro2.png'
import Title from '../../Components/Title';
import Button from '../../Components/Button';
import Progressbar from '../../Components/Progressbar';
import Stats from '../../Components/Stats';
import { brief, flame, mug, download, git} from '../../utils/icons'
import shape1 from '../../img/shape1.jpg';
// import shape2 from '../../img/shape2.png';


const AboutStyled = styled(PagesLayout)`
    background-color: ${(props) => props.theme.aboutBg};
    position: relative;
    overflow: hidden;

    .stats-container{
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
        /* grid-gap: 10%; */

    }

    .about-info{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        z-index: 5;
        @media screen and (max-width: 1150px){
            grid-template-columns: repeat(1, 1fr);

        }
        /* margin-right: -11rem; */
        
        .about-image{
            padding: 1.5rem;
            background: ${(props) => props.theme.colorBgGrad2};
            border-radius: 5px;
            width: 80%;
            @media screen and (max-width: 1150px){
                width: 100%;
    
            }
            
            img{
                width: 100%;
            }
            
        }
        
        .about-content{
            
            .progress-bars{
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            
            .btn-con{
                margin-top: 2rem;
                @media screen and (max-width: 1150px){
                    margin-bottom: 2rem;
        
                }
            }
        }
    }

    .shape1{
        position: absolute;
        left: -7px;
        top: 0px;
        z-index: 1;
        opacity: 0.5;
        pointer-events: none;
        width: 100%;
        height: 100%;

    }
    /* .shape2{
        position: absolute;
        right: -7px;
        top: 17px;
        z-index: 1;
        opacity: 0.2;
        pointer-events: none;

    } */
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
            ever since the 1500s.
            </p>
            <div className='progress-bars'>
                <Progressbar
                    bg={theme.colorPrimary}
                    service={'Web Development'}
                    progress={'76'}
                />
                <Progressbar
                    bg={theme.colorPurple}
                    service={'UI/UX Design'}
                    progress={'65'}
                />
                <Progressbar
                    bg={theme.colorGreen}
                    service={"NodeJS API's"}
                    progress={'65'}
                />
            </div>
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
      <div className='stats-container'>
        <Stats 
            icon={flame}
            number="1+" 
            desc="All projects" 
        />
        <Stats 
            icon={mug}
            number="200+" 
            desc="Cup of coffee" 
        />
        <Stats 
            icon={brief}
            number="1+" 
            desc="Year Experience" 
        />
        <Stats 
            icon={git}
            number="A+" 
            desc="All Projects carried" 
        />
      </div>
      <img alt="" src={shape1} className="shape1" />
      {/* <img alt="" src={shape2} className="shape2" /> */}
    </AboutStyled>
  )
}

export default About;

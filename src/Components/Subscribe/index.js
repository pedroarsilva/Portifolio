import Button from '../Button/';
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';
import { arrow } from '../../utils/icons';

const SubscribeStyled = styled.div`
    background-color: ${(props) => props.theme.colorPurple};
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 18rem;
    /* border-top-right-radius: 15px;
    border-bottom-right-radius: 15px; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 2rem;

    h1{
        font-size: clamp(1.5rem, 3vw, 2rem)
    }

    .btn-con{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

function Subscribe() {
    const theme = useTheme()
  return (
    <SubscribeStyled theme={theme}>
        <h1>Subscribe to my newsletter and get 10% off your first project.</h1>
        <div className='btn-con'>
            <Button 
                name="Subscribe"
                blob="blob"
                bg={theme.colorBlack}
                color={theme.colorWhite}
                bFw={'600'}
                onClick="onClick"
                bRad={'10px'}
                bPad={theme.bPad1}
                icon={arrow}
            />
        </div>
    </SubscribeStyled>
  )
}

export default Subscribe

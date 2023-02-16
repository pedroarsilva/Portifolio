// 2:13:52
import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import TimelineItem from '../TimelineItem';
import { education } from '../../utils/icons';


const TimelineStyled = styled.div`

`;

function Timeline() {
  const theme = useTheme()

  return (
    <TimelineStyled theme={theme}>
        <div className='education-timeline timeline'>
            <TimelineItem 
                duration={'2010 - 2013'}
                title={'Systems Analysis and Development Dlipoma'}
                desc={'It is a long established fact that a reader will be distracted'}
                icon={education}
            />
        </div>
        <div className='jobs-timeline timeline'>

        </div>
    </TimelineStyled>
  )
}

export default Timeline;
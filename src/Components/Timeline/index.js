// 2:13:52
import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import TimelineItem from '../TimelineItem';
import { education, brief } from '../../utils/icons';


const TimelineStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2rem;
    
    .timeline{
        background-color: ${(props) => props.theme.colorBg5};
        padding: 2rem;
        border-radius: 10px;
    }

    .jobs-timeline{

        .icon{
            left: -10px;
        }
    }
`;

function Timeline() {
  const theme = useTheme()

  return (
    <TimelineStyled theme={theme}>
        <div className='education-timeline timeline'>
            <TimelineItem 
                duration={'2010 - 2014'}
                title={'Systems Analysis and Development Dlipoma'}
                desc={'State University of Health Sciences of Alagoas - UNCISAL'}
                icon={education}
            />
            <TimelineItem 
                duration={'2012 - 2013'}
                title={'Internship in Systems Analysis and Development'}
                desc={'Helpdesk, IT support, physical infrastructure and printer - UNIMED'}
                icon={education}
            />
        </div>
        <div className='jobs-timeline timeline'>
            <TimelineItem 
                duration={'2012 - 2013'}
                title={'Internship in Systems Analysis and Development'}
                desc={'Helpdesk, IT support, physical infrastructure and printer - UNIMED'}
                icon={brief}
            />
            <TimelineItem 
                duration={'2013 - 2017'}
                title={'Support Analyst - S4 level - MACROCOOP'}
                desc={'Helpdesk, Consulting in hospital management systems, Oracle database.'}
                icon={brief}
            />

        </div>
    </TimelineStyled>
  )
}

export default Timeline;
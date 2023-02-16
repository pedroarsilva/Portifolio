// 1:57:39
import React from 'react';
import styled from "styled-components";
import ServiceItem from '../../Components/ServiceItem';
import Title from '../../Components/Title';
import { useTheme } from '../../context/themeContext';
import { PagesLayout } from '../../styles/Layouts';
import { design, desktop, code } from '../../utils/icons';

const ServicesStyled = styled(PagesLayout)`
    background: ${(props) => props.theme.colorBgGrad};

    .services-con{
        position: relative;
        margin-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: .8rem;
    }

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
            <ServiceItem 
                icon={design} 
                title={'Web Design'}
                bg={theme.colorPurple}
                shadow={theme.shadowPurple}
                desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has."}
            />
            <ServiceItem 
                icon={code} 
                title={'Web Development'}
                bg={theme.colorPrimary}
                shadow={theme.shadowYellow}
                desc={"Why do we use it? It is a long established fact that a reader will be distracted by at its layout."}
            />
            <ServiceItem 
                icon={desktop} 
                title={'Game Development'}
                bg={theme.colorGreenDark}
                shadow={theme.shadowGreen}
                desc={"Why do we use it? It is a long established fact that a reader will be distracted by at its layout."}
            />
        </div>
    </ServicesStyled>
  )
}

export default Services;

import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import Title from '../../Components/Title';
import { PagesLayout } from '../../styles/Layouts';
import { portfolios as myPortfolios } from '../../data/portifolios';
import { useState } from 'react';
import PortfolioItem from '../../Components/PortfolioItem';



const PortfoliosStyled = styled(PagesLayout)`
    .portfolios-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        gap: 2rem;
    }
`;

function Portfolios() {
    const theme = useTheme()

    const [portfolios, setPortfolios] = useState(myPortfolios)

    return (
        <PortfoliosStyled theme={theme}>
            <Title
                name="Portfolios"
                desc={"It is a long established fact that a reader will be distracted by the readable"}
            />
            <div className='filter-btns'></div>
            <div className='portfolios-con'>
                {portfolios.map((port) => {
                    return <PortfolioItem key={port.id} {...port} />
                })}
            </div>
        </PortfoliosStyled>
    )
}

export default Portfolios;

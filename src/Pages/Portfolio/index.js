import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import Title from '../../Components/Title';
import { PagesLayout } from '../../styles/Layouts';
import { portfolios as myPortfolios } from '../../data/portifolios';
import { useState } from 'react';



const PortfoliosStyled = styled(PagesLayout)`

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
                    return <li>{port.category}</li>
                })}
            </div>
        </PortfoliosStyled>
    )
}

export default Portfolios;

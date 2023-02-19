// 3:07:30
import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import Title from '../../Components/Title';
import { PagesLayout } from '../../styles/Layouts';
import { portfolios as myPortfolios } from '../../data/portifolios';
import { useState } from 'react';
import PortfolioItem from '../../Components/PortfolioItem';
import { getUnique } from '../../utils/helpers';



const PortfoliosStyled = styled(PagesLayout)`
    background: linear-gradiente(180deg, #222121, #191919);

    .portfolios-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        gap: 2rem;
    }

    .filter-btns{
        margin: 2rem 0;
        display: flex;
        align-items: center;
        gap: 1.5rem;

        .filter-btn{
            display: inline-block;
            font-family: inherit;
            font-size: inherit;
            font-weight: 600;
            color: ${(props) => props.theme.colorGrey3};
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            position: relative;
            transition: all .3s ease-in-out;
        }
    }

    .active{
        color: ${(props) => props.theme.colorPrimary} !important;
        
        &::after{
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 2px;
            background: ${(props) => props.theme.colorPrimary}
        }
    }
`;

function Portfolios() {
    const theme = useTheme()

    // console.log([1,1,2,3,4,4,44,2,5,7,8])
    // console.log([...new Set([1,1,2,3,4,4,44,2,5,7,8].map(item => item))])

    const [portfolios, setPortfolios] = useState(myPortfolios)
    const [categories, setCategories] = useState(['All', ...getUnique(portfolios, 'category')])
    const [active, setActive] = useState(0)

    function activeCategory(index) {
        setActive(index)
    }

    function filterPortfolios(category, index){
        if(category === 'All'){
            setPortfolios(myPortfolios)
            activeCategory(index)
            return
        }
        
        const filtered = myPortfolios.filter((port) => {
            return port.category === category
        })

        activeCategory(index)
        setPortfolios(filtered)
    }

    return (
        <PortfoliosStyled theme={theme}>
            <Title
                name="Portfolios"
                desc={"It is a long established fact that a reader will be distracted by the readable"}
            />
            <div className='filter-btns'>
                {
                    categories.map((categ, index) => {
                        return <button
                            key={index}
                            onClick={() => filterPortfolios(categ, index)}
                            className={`filter-btn ${active === index ? 'active' : ''}`}
                        >
                            {categ}
                        </button>
                    })
                }
            </div>
            <div className='portfolios-con'>
                {portfolios.map((port) => {
                    return <PortfolioItem key={port.id} {...port} />
                })}
            </div>
        </PortfoliosStyled>
    )
}

export default Portfolios;

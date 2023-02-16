import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

const ServiceItemStyled = styled.div`
    padding: 1rem .2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    transition: all .3s ease-in-out;
    
    .icon{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.colorBg3};
        transition: all .3s ease-in-out;

        i{
            font-size: 1.5rem;
        }

        &:hover{
            background-color: ${(props) => props.theme.colorGreen};
        }
    }
    
    h4{
        font-size: clamp(1.2rem, 2.0vw, 1.5rem);
        margin: 1.2rem 0;
        text-align: center;
    }
    
    &:hover{
        transform: translateY(-3px);
    }
    
    p{
        font-size: clamp(.9rem, 2.5vw, .9rem);
        text-align: center;
    }
`

function ServiceItem({icon, title, desc, bg, shadow}){
    const theme = useTheme()
    return(
        <ServiceItemStyled
            style={{
                background: bg,
                boxShadow: shadow
            }}
            theme={theme}
        >
            <div className="icon">
                {icon}
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </ServiceItemStyled>
    )
}

export default ServiceItem;
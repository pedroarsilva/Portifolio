import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Share+Tech+Mono&display=swap');
    /* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'); */

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body{
        background-color: #1E1E1E;
        font-family: 'Roboto', sans-serif;
        /* font-family: 'Share Tech Mono', monospace; */
        font-size: clam(1rem, 1.5vw, 1.2rem);
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 6px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #ff4c60;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #ff4c60;
            border-radius: #222121;
        }
    }

    a, button, input{
        font-family: inherit;
        font-size: inherit;
        text-decoration: none;
        /* color: inherit;  */
    }

    #tsparticles{
        height: 100vh;
    }
`
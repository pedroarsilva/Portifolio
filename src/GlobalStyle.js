import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Share+Tech+Mono&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body{
        background-color: #1E1E1E;
        font-family: 'Roboto', sans-serif;
        font-family: 'Share Tech Mono', monospace;
        font-size: clam(1rem, 1.5vw, 1.2rem);
    }
`
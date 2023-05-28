import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/ProductSans-Black.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'fontDefault';
        src: url(${font});
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'fontDefault';
        text-transform: uppercase;   
        
        user-select: none;
    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: #171717;

        overflow: hidden;
    }

    #root {
        width: 100%;
        height: 100%;

        background: linear-gradient(250.15deg, #171717 3.29%, #121212 94.75%);
        color: white;
    }
    
    `

export default GlobalStyle;
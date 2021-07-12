import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    html
    body {
        width: 100vw;
        min-height: 100vh;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #222;
        color: #757575;
        font-family: Arial, Helvetica, sans-serif;
    }

    body,
    input,
    textarea {
        font-size: 2.5rem;
        color: #757575;
    }
`;

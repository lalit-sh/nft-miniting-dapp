import styled from 'styled-components'

export const StyledButton = styled("button")`
    height: 48px;
    align-items: center;
    border-radius: 4px;
    box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.03em;
    line-height: 1.2;
    justify-content: center;
    opacity: 1;
    padding: 0px 24px;
    text-align: center;
    outline: 0px;
    background-color: rgb(55, 111, 221);
    color: white;
    transition : all 0.3s;
    background : var(--button-backgroundColor);
    background-size: 300% 100%;
    border: unset;
    min-width: 200px;
    :hover{
        background-position : 100% 0;
    }
`;


export const StyleTitle = styled("h1")`
    font-size: 48px;
    margin-bottom: 30px;
    color: var(--primaryColor)
`;

export const StyleTitleLogo = styled("h1")`
    font-size: 48px;
    margin-bottom: 30px;
    background: var(--logo-backgroundColor);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-family: 'Josefin Sans', sans-serif;
    font-style: italic;
`;

export const StyledSection = styled('section')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 50%;
    height: 100%;
`

export const StyledContainer = styled('div')`
    width : 100%;
    min-height : 100vh;
    background-size : 100% 100%;
    background-position : top center;
    @media screen and (min-width : 1920px){
        background-size : 100% 100%;
    }
`
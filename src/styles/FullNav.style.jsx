import styled from "styled-components";
import { Link } from "react-router-dom"

export const NavbarContainer = styled.nav `
    width: 100%;
    height: ${(props) => (props.navBarOpener ? "100vh" : "80px")};
    padding: 2rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 9vh;
        padding: 0 2rem;
        /* border-bottom: 0.5px solid #000; */
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    padding: 0 2rem 0 0;
`;

export const RightContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 0 0 2rem;  
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`;

export const Logo = styled.img `
    height: auto;
    min-width: 130px;
`;

export const NavbarButton = styled.button `
    text-transform: uppercase;
    font-family: Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-weight: 700;
    background: none;
    border: none;
    color: #000;
    font-size:  1.56rem;
    cursor: pointer; 
`

export const NavbarBottomContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    z-index:10;
`

export const MenuItemContainer = styled(Link) `
     width: 100%;
     padding: 2rem;
     margin: 0;
     position: relative;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;

     &::after {
        content: "";
        width: 0;
        height: 1px;
        background: #000;
        position: absolute;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        }
    
    &:hover::after {
        width: 100%;
    }

    &::before {
        content: "";
        width: 0;
        height: 1px;
        background: #000;
        position: absolute;
        top: -8px;
        left: 0;
        transition: all 0.5s;
        }
    
    &:hover::before {
        width: 100%;
    }

    &::active {
        content: "";
        width: 0;
        height: 1px;
        background: #000;
        position: absolute;
        top: -8px;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        }
`

export const LinkText = styled.h3 `
    font-family: Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;


    /*  */
`
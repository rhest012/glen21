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
        border-bottom: 1px solid #000;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    padding: 0 3rem 0 0;
    justify-content: flex-end;
    flex: 45%;
    gap: 15%;
`;

export const RightContainer = styled.div`
    display: flex;
    padding: 0 0 0 3rem;
    flex: 45%;
    gap: 15%;
`;

export const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 10%;
    width: 100%

`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`;

export const NavbarLink = styled(Link) `
    color: #000;
    font-size: 0.85rem;
    font-family: Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-decoration: none;
    position: relative;
    transition: all 1s;

     &::after {
        content: "";
        width: 0;
        height: 3px;
        background: #000;
        position: absolute;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        }
    
    &:hover::after {
        width: 100%;
    }

    &::active {
        font-weight: 600;
        content: "";
        width: 0;
        height: 3px;
        background: #000;
        position: absolute;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        width: 100%;
        }

    @media (max-width:700px) {
        display: none;
    }
`;

export const Logo = styled.img `
    height: auto;
    width: 120px;
`;

export const MobileMenuButton = styled.button `
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: #000;
    font-size:  45px;
    cursor: pointer; 

    @media (min-width:700px) {
        display: none;
    }
`;

export const NavbarMobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkMobile = styled(Link) `
    color: #000;
    font-size: 0.85rem;
    font-family: Inter, Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-decoration: none;
`;
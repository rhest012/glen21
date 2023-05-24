import { useState } from "react";
import Glen21Logo from '../../assets/Glen_21_Logo.svg'
import {
    NavbarContainer, 
    LeftContainer, 
    RightContainer,
    CenterContainer,
    NavbarInnerContainer,
    NavbarMobileContainer,
    NavbarLink,
    Logo,
    MobileMenuButton,
    NavbarLinkMobile
} from '../../styles/Navbar.style'

const Navbar = () => {
    const [navBarOpener, setNavBarOpener] = useState(false);
  return (
    <NavbarContainer>
        <NavbarInnerContainer>
            <LeftContainer>
                <Logo src={Glen21Logo}></Logo>
            </LeftContainer>
            <RightContainer>
                <MobileMenuButton onClick={() => {
                setNavBarOpener((curr) => !curr);
            }}
                >
                {navBarOpener ? <> &#10005; </> : <> Menu </>}
            </MobileMenuButton>
            </RightContainer>
        </NavbarInnerContainer>
        { navBarOpener && ( 
        <NavbarMobileContainer>
            <NavbarLinkMobile to="/">Home</NavbarLinkMobile>
            <NavbarLinkMobile to="/about">About</NavbarLinkMobile>
            <NavbarLinkMobile to="/previous-shows">Previous Shows</NavbarLinkMobile>
            <NavbarLinkMobile to="/contact">Contact</NavbarLinkMobile>
        </NavbarMobileContainer>
        )}
    </NavbarContainer>
    
  )
}

export default Navbar
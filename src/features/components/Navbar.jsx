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
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
            </LeftContainer>
            <CenterContainer>
                <Logo src={Glen21Logo}></Logo>
            </CenterContainer>
            <RightContainer>
                <NavbarLink to="/previous-shows">Previous Shows</NavbarLink>
                <NavbarLink to="/contact">Contact</NavbarLink>
                <MobileMenuButton onClick={() => {
                setNavBarOpener((curr) => !curr);
            }}
                >
                {navBarOpener ? <> &#10005; </> : <> &#8801; </>}
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
import React from 'react'
import { useState } from "react";
import { 
    LeftContainer,
    LinkText,
    Logo,
    MenuItemContainer,
    NavbarBottomContainer,
    NavbarButton,
    NavbarContainer, NavbarInnerContainer, RightContainer 
} from '../../styles/FullNav.style';
import Glen21Logo from '../../assets/Glen_21_Logo.svg'

const FullNav = () => {
    const [navBarOpener, setNavBarOpener] = useState(false);
  return (
    <NavbarContainer>
        <NavbarInnerContainer>
            <LeftContainer>
                <Logo src={Glen21Logo}></Logo>
            </LeftContainer>
            <RightContainer>
                <NavbarButton 
                    onClick={() => {setNavBarOpener((curr) => !curr)}}
                >
                    {navBarOpener ? <> Menu </> : <> Menu </>}
                </NavbarButton>
            </RightContainer>
        </NavbarInnerContainer>
        { navBarOpener && (
        <NavbarBottomContainer>
            <MenuItemContainer to="/">
                <LinkText> Home </LinkText>
            </MenuItemContainer>
            <MenuItemContainer to="/background">
                <LinkText> Background </LinkText>
            </MenuItemContainer>
            <MenuItemContainer to="/previous-shows">
                <LinkText> Previous Shows </LinkText>
            </MenuItemContainer>
            
            
        </NavbarBottomContainer>
        )}
    </NavbarContainer>
  )
}

export default FullNav
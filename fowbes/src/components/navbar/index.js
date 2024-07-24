import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    LogoImage,
} from "./navbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
            <LogoImage src="/images/F.png" alt="Logo" />
            <LogoImage src="/images/Fowbes.png" alt="Logo" />
            <LogoImage src="/images/Fowbes.png" alt="Logo" />
            <LogoImage src="/images/Fowbes.png" alt="Logo" />
                <Bars />

                <NavMenu>
                    <NavLink to="/home" >
                        Home
                    </NavLink>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/roadmap" activeStyle>
                        Roadmap
                    </NavLink>
                    <NavLink to="/buyfowbes" activeStyle>
                        Buy $FOWBES
                    </NavLink>
                    <NavLink to="/socials" activeStyle>
                        Socials
                    </NavLink>

                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
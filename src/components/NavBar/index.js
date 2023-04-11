import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/merchandising' activeStyle>
                        Merchandising
                    </NavLink>
                    <NavLink to='/mangas' activeStyle>
                        Mangas
                    </NavLink>
                    <NavLink to='/comics' activeStyle>
                        Comics
                    </NavLink>
                    <NavLink to='/library' activeStyle>
                        Library
                    </NavLink>
                    <NavLink to='/forum' activeStyle>
                        Forum
                    </NavLink>
                    <NavLink to='/register' activeStyle>
                        Sign Up
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;

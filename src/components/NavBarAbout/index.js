import React from 'react';
import { NavbarContainer, NavList, NavItem, NavLink } from './styles'; // Importando os estilos

function AboutNavbar() {
    return (
        <NavbarContainer>
            <NavList>
                <NavItem><NavLink href="/home">Home</NavLink></NavItem>
            </NavList>
        </NavbarContainer>
    );
}

export default AboutNavbar;

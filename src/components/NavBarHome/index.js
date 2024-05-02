import React from 'react';
import { NavbarContainer, NavList, NavItem, NavLink, LogoutButton } from './styles'; // Importando os estilos

function HomeNavbar() {
    return (
        <NavbarContainer>
            <NavList>
                <NavItem><NavLink href="/about">Sobre</NavLink></NavItem>
                <NavItem><LogoutButton onClick={handleLogout}>Sair</LogoutButton></NavItem>
            </NavList>
        </NavbarContainer>
    );
}

function handleLogout() {
    // Simulando o logout, por exemplo, removendo o token de autenticação do localStorage
    localStorage.removeItem('authToken');
    // Redirecionando o usuário para a página de login ou página inicial
    window.location.href = '/login'; // Redireciona para a página de login
}

export default HomeNavbar;

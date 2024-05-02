import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: black;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin-left: 30px;
`;

// Estilização para links na barra de navegação e para o botão de logout
const linkStyles = `
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavLink = styled.a`
  ${linkStyles}
`;

export const LogoutButton = styled.button`
  ${linkStyles}
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

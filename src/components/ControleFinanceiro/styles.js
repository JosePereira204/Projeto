import styled from "styled-components";
import banner from "../img/bitcoin.jpg";



export const Container = styled.div`
  height: 150px;
  text-align: center;
  background-image: url(${banner}); /* Use apenas background-image */
  background-position: center;

  `;

export const Header = styled.h1``;

export const Title = styled.div`
  padding-top: 20px;
  color: #fff;
`;

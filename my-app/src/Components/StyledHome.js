import React from "react";
import styled from "styled-components";

/* const ColorChanger = styled.section`
  background: papayawhip;
  color: palevioletred;

  @media(min-width: 768px) {
    background: mediumseagreen;
    color: papayawhip;
  }
`;
 */
const innerWidth = window.innerWidth;

const AppBar = styled.div`
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  background: white;

  height: 30px;
  overflow: hidden;
  @media (max-width: 950px) {
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    // background-color: ;
  }

  @media (min-width: 950px) {
    top: 0;

    display: flex;
    padding: 20px 20px;

    background-color: #a0e8af;
    justify-content: space-around;
  }
`;

const NavBar = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
  @media (min-width: 950px) {
    display: block;
  }
`;

const Logo = styled.img`
  @media (max-width: 1400px) {
    height: 15px;
    width: 112px;
    cursor: pointer;
  }
`;

const Section = styled.div`
  @media (max-width: 550px) {
    max-height: auto;
    max-width: inherit;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 550px) {
    padding: 30px 20px;
    height: auto;
    width: fit-content;
    display: flex;
    flex-flow: column wrap;
    // width: min-content;
  }
`;
const Content_One = styled.img`
  position: relative;
  left: 10%;
  right: 30%;
  @media (max-width: 550px) {
    // max-height: 20%;
    max-width: 80%;
  }
  @media (min-width: 550px) {
    max-width: 60%;
    max-height: 20%;
  }
`;

const Content_Two = styled.div`
  width: inherit;
  text-align: center;
  color: #3a3d3b;
  width: 80%;
  position: relative;
  top: 3%;
  left: 10%;
  right: 10%;
  font-size: 2rem;
`;

const Signup_Button = styled.button`
  height: 50px;
  width: 200px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  background: #387ed1;
  font-size: 1.5em;
  cursor: pointer;
  position: relative;
  margin-top: 10%;
  left: 25%;
  right: 25%;
`;
const Section_Two = styled(Section)``;
export {
  AppBar,
  Logo,
  Content_One,
  Section,
  NavBar,
  Content_Two,
  Signup_Button,
  Section_Two,
};

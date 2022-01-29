import React, {Fragment } from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  padding: 0rem 0.5rem;
 
`;

const TopBar = styled.div`
  height: 4rem;
  background: white;
  border-bottom: solid 1px #D4D2D2;
  margin-bottom: 10px;
  padding: 0.1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items:center;
  
  position: sticky;
  top: 0;
`;

const TopLogo = styled.img`
// margin-top:1rem;
margin-left: ${props=>props.noLM ? 0:"1rem"};
  height: 1rem;
  cursor:pointer;
  align-self:center;
`;

const TopNav = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: flex-end;
  align-content: center;
  @media(min-width:960px){
    padding-right:2rem;
  }

`;
const TopLinks = styled(TopNav)`
  flex-basis: 1;
  font-weight:300;
  font-size:0.9rem;

  display: none;
  @media (min-width: 960px) {
    display: flex;
    color: #424242;
    flex-wrap: wrap;
    align-content: center;
    justify-content:space-around;
  }
  & > div{
    cursor:pointer;
  }


`;

const TopDiv = styled.div`
@media(min-width:960px){
  display:none;
}
`


const MenuBar = styled.div`
cursor:pointer;
// padding-top:1rem;
position:relative;
z-index:2;
`

const ContentOne = styled.div`
text-align:center;
display:flex;
flex-direction:column;
justify-content:space-between;
@media(min-width:800px){
  padding:0 1.5rem;

}
`
const ContentOneImage = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  // height: 20%;
  width: 90%;
  @media(min-width:550px){
    align-self:center;
     width:40%;
  }
`; 



const ImageStyle = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  // height: 20%;
  width: 90%;
  @media (min-width: 800px) {
    align-self: left;
    width: 80%;
  
  }
`;


const Heading = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => (props.black ? "black" : "#424242")};
  padding: ${(props) => (props.noPadding ? "0" : "0.5rem")};
  margin: ${(props) => (props.noMargin ? "0" : "1rem")};
  justify-content: center;
  align-items: center;
  @media(min-width:800px){
    font-size:3rem;
    flex-basis:100%;
    margin:0.5rem;


  }
  
`;

const HeadingOne = styled(Heading)`
  font-size: ${props=>props.size?props.size:"2rem"};
  text-align: ${(props) => (props.center ? "center" : "left")};
  margin-left: 0;
  padding: ${props=>props.padding};
`;



const TextContent = styled.div`
// margin-bottom:1rem;
font-size:1.5rem;
color:#424242;
text-align:center;
margin:${props=>props.margin?"2rem 0":0}

`
const TextContentOne = styled(TextContent)`
   
  font-size: ${(props) => props.Size || "1rem"};
  line-height: ${(props) => (props.noHeight ? "normal" : "1.5rem")};
  word-spacing: ${(props) => (props.normal ? "normal" : "0.4rem")};
  margin: ${(props) => (props.margin ? props.margin|| "2rem 0" : 0)};
  text-align: ${(props) => (props.left ? "left" : "center")};
  
`;

const FooterPara = styled.div`
color:#424242;
font-size:0.7rem;
line-height:1rem;
margin-top:1rem;
font-weight:400;


`
const LinkText = styled(TextContentOne)`
  cursor: pointer;
  padding:0.1rem;
  &:hover {
    color: rgba(74, 93, 237, 0.88);
  }
`;

const NavLink = styled.div`
display:flex;
justify-content:${props=>props.center?"center":"start"}
`;
const Box = styled.div`
  border: solid #dad1d1 1px;
  border-radius: 10px;
  margin-bottom:0.1rem;
  height: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color:#424242;
  @media(min-width:800px){
    flex-basis:100%;
  }
`;

const ButtonContainer = styled.div`
text-align:center;
margin:2rem;
// justify-content:center;
// align-items:center;
`

const Container = styled(ButtonContainer)`
  margin: 0;
  @media (min-width: 800px) {
    flex-basis: 100%;
    margin-top:2rem;
  }
`;
const ContainerFlex = styled.div`
  margin: 1rem;
  @media (min-width: 800px) {
    display: flex;
    flex-basis: 100%;
    & > div {
      padding:1rem;
      border: 1px solid #dad1d1;
    }
    
  }
`;


const StyledButton = styled.button`
  width: max-content;
  font-size: 1.3rem;
  background: #387ed1;
  color: white;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #222;
    cursor: pointer;
  }
  align-self: center;
`;




const FooterMain = styled.div`
  background: #fafafb;
  padding: 1rem;

  margin-top: 3.5rem;
  @media (min-width: 1100px) {
    padding: 1rem 3rem;
  }
`;

const FooterLinkContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  // justify-items: center;
  flex-wrap: wrap;
  text-align: center;
  
`;
const ResponsiveBox = styled.div`
@media (min-width:800px){
  display:flex;
  justify-content:space-evenly;
  margin:3rem 1.5rem;

}
`
const ResponsiveBoxColumn = styled.div`
display:flex;
flex-direction:column;

margin:0.5rem;
height:max-content;

`;
  
const ImageContainer = styled.section`
 padding:20 20px 100px 20px;
`;


const ListContainer = styled.div`
@media(min-width:800px){
  display:flex;
  justify-content:flex-start;
}

`
const FlexContainer = styled.div`
@media(min-width:800px){
  display:grid;
  grid-template-rows:auto;
}

`

 const ListItem = ({ list }) => {
   const style = { color: "#424242", lineHeight: "1.7rem" };
  return (
    <ul style={style}>
      {list.map((item,i)=><li key={i}>{item}</li>)}
    </ul>
  )
 
}


export {
  TopLogo,
  BodyContainer,
  TopBar,
  ContentOne,
  ContentOneImage,
  MenuBar,
  Heading,
  TextContent,
  HeadingOne,
  TextContentOne,
  NavLink,
  Box,
  StyledButton,
  ButtonContainer,
  FooterLinkContainer,
  ResponsiveBox,
  ResponsiveBoxColumn,
  ImageStyle,
  Container,
  TopNav,
  TopLinks,
  TopDiv,
  ImageContainer,
  FooterMain,
  LinkText,
  FooterPara,
  ContainerFlex,
  ListItem,
  ListContainer,
  FlexContainer,
};

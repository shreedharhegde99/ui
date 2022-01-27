import styled from "styled-components";

const BodyContainer = styled.div`
padding: 0 1rem;
`;

const TopBar = styled.div`
  height: 4rem;
  background: white;
  border-bottom: solid 1px #D4D2D2;
  margin-bottom: 10px;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: sticky;
  top: 0;
`;
const TopLogo = styled.img`
margin-top:1rem;
margin-left:1rem;
  height: 1rem;
  cursor:pointer;
  align-self:center;
`;

const TopNav = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: flex-end;
  align-content: center;
  padding-right:2rem;
`;
const TopLinks = styled(TopNav)`
  flex-basis: 1;

  display: none;
  @media (min-width: 960px) {
    display: flex;
    color: #424242;
    flex-wrap: wrap;
    align-content: center;
    justify-content:space-around;
  }
`;

const TopDiv = styled.div`
@media(min-width:960px){
  display:none;
}
`


const MenuBar = styled.div`
cursor:pointer;
padding-top:0.95rem;
`

const Content_One = styled.div`
text-align:center;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const Content_One_Image = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  // height: 20%;
  width: 90%;
  @media(min-width:550px){
    align-self:center;
     width:30%;
  }
`; 



const Image_Style = styled.img`
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
  
`;

const Heading_One = styled(Heading)`
font-size:2rem;
text-align:left;
margin-left:0;
padding:0;

`



const Text_Content = styled.div`
// margin-bottom:1rem;
font-size:1.5rem;
color:#424242;
text-align:center;
margin:${props=>props.margin?"2rem 0":0}

`
const Text_Content_One = styled(Text_Content)`
  font-size: ${props=>props.Size||"1rem"};
  line-height:${props=>props.noHeight?"normal":"1.5rem"};
  word-spacing:${props=>props.normal?"normal":"0.4rem"} ;
  margin: ${(props) => (props.margin ? "2rem 0" : 0)};
  text-align:${props => props.left ? "left" : "center"}
`;

const NavLink = styled.div`

// width:max-content;
  color: #3f61bf;
  &:hover {
    color: black;
  };
//  margin-left:${props => props.primary ? "4rem" : 0};
 margin-bottom:2rem;
 text-align:${props=>props.center?"center":"left"};
`;
const Box = styled.div`
  border: solid #dad1d1 1px;
  border-radius: 10px;
  border-bottom: ${(props) => (props.noBottom ? 0 : "1px solid #dad1d1")};
  height: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
text-align:center;
margin:2rem;
justify-content:center;
// align-items:center;



`
const StyledButton = styled.button`
  font-size: 1.5rem;
  background: #387ed1;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  align-self: center;
  &:hover {
    background: #222;
    cursor: pointer;
  }
align-self:center;

  `;


const FooterContainer = styled.div`
  background: #ebe9e9;
  padding:1rem;
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
  flex:1;
  margin:2rem 0;

}
`
const ResponsiveBox_Column = styled(ResponsiveBox)`
flex-direction:column;
flex-wrap:wrap;

`;
const Container = styled(ButtonContainer)`
  margin: 0.5rem;
  @media (min-width: 800px) {
    flex-basis: 100%;
  }
`;
  


export {
  TopLogo,
  BodyContainer,
  TopBar,
  Content_One,
  Content_One_Image,
  MenuBar,
  Heading,
  Text_Content,
  Heading_One,
  Text_Content_One,
  NavLink,
  Box,
  StyledButton,
  ButtonContainer,
  FooterContainer,
  FooterLinkContainer,
  ResponsiveBox,
  ResponsiveBox_Column,
  Image_Style,
  Container,
  TopNav,
  TopLinks,
  TopDiv,
};

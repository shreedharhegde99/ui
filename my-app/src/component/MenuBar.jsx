import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const Main = styled.div`
  line-height: 2rem;

  position: fixed;
  z-index:1;
  top: 0;
  left: 0;
  width: 100%;
  height: 96%;
  background: white;
  margin: 0.5rem;

  display: flex;
  color: #424242;
  @media (min-width: 960px) {
    position: fixed;
    top: 4.2rem;
    left: 39%;
    height: max-content;
    width: 55%;
    background: white;
    box-shadow: 0 0 0.5rem 0 rgb(235, 233, 233);
    margin:0;
  }
`;

const CloseMenu = styled.div`
  flex-basis: 10%;

  padding: 2rem 0;
  cursor: pointer;
  @media(min-width:960px){
    display:none;
  }
  `;
const MenuBar = styled.div`
  padding: 0  1rem;
  flex-basis: 90%;
  display: flex;
  flex-direction: column;
  height:max-content;
  @media(min-width:960px){
    margin:0;
    padding:0;
  }
`;

const MenuOne = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: auto;
  padding: 1rem 0;
  text-align: left;
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
  }
`;
const MenuOneLg = styled(MenuOne)`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: auto;
  padding: 1rem 0;
  text-align: left;
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    background: #fafafb;
    text-align: Left;
    padding: 2rem 2rem;
    width: 100%;
    font-size:1.1rem;
  }
`;

const Heading = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;
const Hr = styled.hr`
  color: black;
  width: 100%;
  margin: 0;
  padding: 0;
  border-top: 10px black;
  @media (min-width: 960px) {
    display:none;
  }
`;
const Logo = styled.img`
  margin-top: 0.5rem;
  height: 1.5rem;
  width: 2rem;
  @media (min-width: 960px) {
    height: 50%;
    width: 4rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1rem auto;
  column-gap: 1.5rem;
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: auto ;
    grid-template-rows: auto  auto;
    text-align:center;

  }
`;

const MenuTwo = styled(MenuOne)`
@media(min-width:960px){
  display:none;
}
`

function Menu(props) {
  const { open } = props;
  // console.log(open)
  // console.log(props);

  return (
    <>
      <Main>
        <MenuBar>
          <MenuTwo>
            <div>Signup</div>
            <div>About</div>
            <div>Products</div>
            <div>Pricing</div>
            <div>Support</div>
          </MenuTwo>
          <Hr />
          <MenuOne>
            <Grid>
              <div>
                <Logo
                  src="	https://zerodha.com/static/images/products/kite-logo.svg"
                  alt="Kite"
                />
              </div>
              <div>Kite</div>
            </Grid>
            <Grid>
              <div>
                <Logo
                  src="	https://zerodha.com/static/images/products/console.svg"
                  alt="Console"
                />
              </div>
              <div>Console</div>
            </Grid>
            <Grid>
              <div>
                <Logo
                  src="	https://zerodha.com/static/images/products/kite-connect.svg"
                  alt="Kite Connect"
                />
              </div>
              <div>Kite Connect</div>
            </Grid>
            <Grid>
              <div>
                <Logo
                  src="https://zerodha.com/static/images/products/coin.svg"
                  alt="Coin"
                />
              </div>
              <div>Coin</div>
            </Grid>
            <Grid>
              <div>
                <Logo
                  src="	https://zerodha.com/static/images/products/varsity.png"
                  alt="Varsity"
                />
              </div>
              <div>Varsity</div>
            </Grid>
            <Grid>
              <div>
                <Logo
                  src="	https://zerodha.com/static/images/products/tqna.png"
                  alt="Trading Q&A"
                />
              </div>
              <div>Trading Q&A</div>
            </Grid>
          </MenuOne>
          <Hr />
          <MenuOneLg>
            <div>
              <div>
                <Heading>Utilties</Heading>
              </div>
              <div>
                <div>Brokerage Calculator</div>
                <div>Margin Calculator</div>
                <div>Holiday Calendar</div>
              </div>
            </div>
            <div>
              <div>
                <Heading>Updates</Heading>
                <div>
                  <div>Z-Connect Blog</div>
                  <div>Pulse News</div>
                  <div>Circulars/Bulletin</div>
                  <div>IPOs</div>
                </div>
              </div>
            </div>
          </MenuOneLg>
        </MenuBar>
        <CloseMenu onClick={()=>open(false)}>
          <GrClose />
        </CloseMenu>
      </Main>
    </>
  );
}

export default Menu;

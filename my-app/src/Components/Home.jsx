import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Logo,
  Content_One,
  Section,
  NavBar,
  Content_Two,
  Signup_Button,
  Section_Two,
} from "./StyledHome";

// console.log(AppBar)

function Home() {
  return (
    <>
      <div style={{ background: "white" }}>
        <AppBar>
          <Logo src="https://zerodha.com/static/images/logo.svg" />
          <NavBar>Signup </NavBar>
          <NavBar>About</NavBar>
          <NavBar>Products</NavBar>
          <NavBar>Pricing</NavBar>
          <NavBar>Support</NavBar>
          <MenuIcon />
        </AppBar>
        {/* Body area */}
        <Section>
          <div>
            <Content_One src="	https://zerodha.com/static/images/landing.png" />
            {/* hello world */}
          </div>
          <br />
          <Content_Two>
            <h1 style={{ fontWeight: 500, fontSize: "2.75rem" }}>
              Invest in everything
            </h1>
          </Content_Two>
          <Content_Two>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </Content_Two>
          <Signup_Button>Sign up now</Signup_Button>
        </Section>
        <Section_Two>
          <Content_One src="	https://zerodha.com/static/images/largest-broker.svg" />
        </Section_Two>
      </div>
    </>
  );
}
// export default HomePage;
// https://zerodha.com/static/images/logo.sv,NavBarg

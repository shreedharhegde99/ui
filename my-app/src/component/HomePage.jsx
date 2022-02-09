import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Button from "./Button";
import FooterCard from "./FooterCard";
import {
  BodyContainer,
  Box,
  ButtonContainer,
  ContentOne,
  ContentOneImage,
  Heading,
  HeadingOne,
  MenuBar,
  ImageStyle,
  NavLink,
  TextContent,
  TextContentOne,
  TopBar,
  TopLogo,
  StyledButton,
 
  FooterLinkContainer,
  ResponsiveBox,
  ResponsiveBoxColumn,
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
} from "./Styled";
import { BlueLink } from "./link";
import Menu from "./MenuBar";
import styles from "./home.module.css";

function HomePage() {
  const [open, setOpen] = useState(false);

  const SetMenu = (val) => (open ? setOpen(val) : open);
  return (
    <>
      {open && <Menu open={SetMenu} />}
      <div onClick={() => SetMenu(false)}>
        <TopBar>
          <div>
            <TopLogo
              src="	https://zerodha.com/static/images/logo.svg"
              alt="Zerodha Logo"
            />
          </div>
          <TopNav>
            <TopDiv></TopDiv>

            <TopLinks>
              <div>Signup </div>
              <div>About</div>
              <div> Products </div>
              <div>Pricing </div>
              <div>Support</div>
            </TopLinks>

            <MenuBar onClick={() => setOpen(!open)}>
              <CgMenu
                style={{ alignSelf: "center", padding: "0.5rem" }}
                size={21}
              />
            </MenuBar>
          </TopNav>
        </TopBar>
        {/* Content Area No 1 broker */}
        <BodyContainer>
          <ContentOne>
            <ImageContainer>
              <ContentOneImage
                src="	https://zerodha.com/static/images/landing.png"
                alt="No.1 Broker in India"
              />
            </ImageContainer>

            <Heading>Invest in everything</Heading>
            <TextContent>
              online platform to invest in stocks, derivatives, mutual funds,
              and more
            </TextContent>

            <Button />
          </ContentOne>

          {/* Largest stock broker */}
          <ResponsiveBox>
            <Container>
              <ImageContainer>
                <ImageStyle
                  primary
                  src="	https://zerodha.com/static/images/largest-broker.svg"
                  alt="Largest broker"
                />
              </ImageContainer>
            </Container>

            <FlexContainer>
              <div>
                <HeadingOne padding="1rem 0 1rem 0 ">
                  Largest stock broker in India
                </HeadingOne>
              </div>
              <TextContentOne left>
                8+ million Zerodha clients contribute to over 15% of all retail
                order volumes in India daily by trading and investing in:
              </TextContentOne>
              <ListContainer>
                <div>
                  <ListItem
                    list={[
                      "Future and Options",
                      "Commodity derivatives",
                      "Currency derivatives",
                    ]}
                  />
                </div>
                <div>
                  <ListItem
                    list={[
                      "Stocks & IPOs",
                      "Direct mutual funds",
                      "Bonds and Govt. Securities",
                    ]}
                  />
                </div>
              </ListContainer>

              <ImageContainer>
                <ImageStyle
                  src="	https://zerodha.com/static/images/press-logos.png"
                  alt="Press-logos"
                />
              </ImageContainer>
            </FlexContainer>
          </ResponsiveBox>
          {/* The zerodha universe */}
          <div>
            <div>
              <HeadingOne center>The Zerodha Universe</HeadingOne>
            </div>
            <TextContentOne>
              A whole ecosystem of modern investment apps tailored to specific
              needs, built from the ground up
            </TextContentOne>
            <Container>
              <ImageStyle
                src="https://zerodha.com/static/images/ecosystem.png"
                alt="Zerodha eco-system"
              />
            </Container>
            <NavLink primary center alCenter>
              <BlueLink text="Explore our products" />
            </NavLink>
          </div>
          {/* Unbbeatable pricing use content: '\e804'; for arrow in case */}
          <ResponsiveBox>
            <Container>
              <div>
                <HeadingOne>Unbeatable pricing</HeadingOne>
              </div>
              <TextContentOne margin left>
                We pioneered the concept of discount broking and price
                transparency in India. Flat fees and no hidden charges.
              </TextContentOne>
              <NavLink>
                <BlueLink text="See pricing" />
              </NavLink>
            </Container>

            <ContainerFlex>
              <Box>
                <Heading noPadding>₹0</Heading>
                Free equity delivery and direct mutual funds
              </Box>
              <Box>
                <Heading>₹20</Heading> Intraday and F&O
              </Box>
            </ContainerFlex>
          </ResponsiveBox>

          <ResponsiveBox>
            <Container>
              <ImageContainer>
                <ImageStyle
                  src="	https://zerodha.com/static/images/index-education.svg"
                  alt="varsity"
                />
              </ImageContainer>
            </Container>

            <ResponsiveBoxColumn>
              <HeadingOne size="1.5rem">
                Free and open market education
              </HeadingOne>
              <div>
                <TextContentOne margin="1rem 0" left>
                  Varsity, the largest online stock market education book in the
                  world covering everything from the basics to advanced trading.
                </TextContentOne>
                <NavLink>
                  <BlueLink text="Varsity" />
                </NavLink>
              </div>
              <div>
                <TextContentOne margin="1rem 0" left>
                  TradingQ&A, the most active trading and investment community
                  in India for all your market related queries.
                </TextContentOne>
                <NavLink>
                  <BlueLink text="TradingQ&A" />
                </NavLink>
              </div>
            </ResponsiveBoxColumn>
          </ResponsiveBox>

          {/* Open Account */}
          <div>
            <div>
              <Heading> Open a Zerodha account</Heading>
            </div>
            <TextContentOne>
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </TextContentOne>
            <ButtonContainer>
              <StyledButton>Sign up now</StyledButton>
            </ButtonContainer>
          </div>
        </BodyContainer>

        {/* Company */}
        {/* Footer Area */}
        <FooterMain>
          <ResponsiveBox>
            <div>
              <div>
                <TopLogo
                  noLM
                  src="	https://zerodha.com/static/images/logo.svg"
                  alt="Zerodha"
                />
              </div>
              <div>
                <TextContentOne Size="0.8rem" left>
                  © 2010 - 2022, Zerodha Broking Ltd.
                </TextContentOne>
                <TextContentOne Size="0.8rem" left>
                  {" "}
                  All rights reserved.
                </TextContentOne>
                <div>
                  <FaTwitter size={20} className={styles.icon} />
                  <FaFacebook size={20} className={styles.icon} />
                  <FaInstagram size={20} className={styles.icon} />
                  <FaLinkedin size={20} className={styles.icon} />
                  <FaTelegram size={20} className={styles.icon} />
                </div>
              </div>
            </div>
            <div>
              <FooterCard
                heading="Company"
                content={[
                  "About",
                  "Products",
                  "Pricing",
                  "Referral programme",
                  "Careers",
                  "Zerodha.tech",
                  "Press & media",
                  "Zerodha Cares (CSR)",
                ]}
              />
            </div>
            <div>
              <FooterCard
                heading="Support"
                content={[
                  "Contact",
                  "Support portal",
                  "Z-Connect blog",
                  "List of charges",
                  "Downloads & resources",
                  "Videos",
                ]}
              />
            </div>
            <div>
              <FooterCard
                heading="Account"
                content={[
                  "Open an account",
                  "Fund transfer",
                  "60 day challenge",
                ]}
              />
            </div>
          </ResponsiveBox>
          <div>
            <FooterPara margin Size="0.6rem" left>
              Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
              no.: INZ000031633 CDSL: Depository services through Zerodha
              Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
              Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI
              Registration no.: INZ000038238 Registered Address: Zerodha Broking
              Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
              School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
              For any complaints pertaining to securities broking please write
              to complaints@zerodha.com, for DP related to dp@zerodha.com.
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </FooterPara>
            <FooterPara>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </FooterPara>
            <FooterPara>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </FooterPara>
            <FooterPara>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </FooterPara>

            <FooterPara>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </FooterPara>
          </div>
          <div>
            <FooterLinkContainer>
              <LinkText Size="0.7rem" normal>
                NSE
              </LinkText>
              <LinkText Size="0.7rem" normal>
                BSE
              </LinkText>
              <LinkText Size="0.7rem" normal>
                MCX
              </LinkText>
              <LinkText Size="0.7rem" normal>
                Terms & conditions
              </LinkText>
              <LinkText Size="0.7rem" normal>
                Policies & procedures
              </LinkText>
              <LinkText Size="0.7rem" normal>
                Privacy policy{" "}
              </LinkText>
              <LinkText Size="0.7rem" normal>
                Disclosure
              </LinkText>
              <LinkText Size="0.7rem" normal>
                For investor's attention
              </LinkText>
            </FooterLinkContainer>
          </div>
        </FooterMain>
      </div>
    </>
  );
}

export default HomePage;

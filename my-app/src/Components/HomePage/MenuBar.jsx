import React from 'react';
import styled from "styled-components"




const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  position: fixed;
  z-index:1;
  width: 100%;
  height: 100%;
  background: rgba(219, 214, 214, 0.42);
`;

const MenuOne = styled.div`
flex-basis:2;
display:flex;
justify-content:space-between;
flex-wrap:wrap;

`


function Menu() {
  


  return (
    <>
      <MenuBar>
        <MenuOne>
          <div>Signup</div>
          <div>About</div>
          <div>Products</div>
          <div>Pricing</div>
          <div>Support</div>
        </MenuOne>
        <div>
          <div>Kite</div>
          <div>Console</div>
          <div>Kite Connect</div>
          <div>Coin</div>
          <div>Varsity</div>
          <div>Trading Q&A</div>
        </div>
        <div>
          <div>
            <div>
              <div>Utilties</div>
            </div>
            <div>
              <div>Brokerage Calculator</div>
              <div>Margin Calculator</div>
              <div>Holiday Calendar</div>
            </div>
          </div>
          <div>
            <div>
              <div>Updates</div>
              <div>
                <div>Z-Connect Blog</div>
                <div>Pulse News</div>
                <div>Circulars/Bulletin</div>
                <div>IPOs</div>
              </div>
            </div>
          </div>
        </div>
      </MenuBar>
    </>
  );
}

export default  Menu
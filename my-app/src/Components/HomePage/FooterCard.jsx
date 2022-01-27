import React from 'react';
import styled from "styled-components"

const FooterWrapper = styled.div`
width:min-content;
color:#424242;
@media(min-width:800px){
  margin-left:4.5rem;    

}

`


function FooterCard(props) {
  const{heading,content} = props


  return (
    <>
      <FooterWrapper>
        <h4>{heading}</h4>
        {content.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </FooterWrapper>
    </>
  );
}

export default  FooterCard
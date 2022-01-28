import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  color: #424242;
  

  @media (min-width: 800px) {
    margin-left: 4.5rem;
  }
`;

const LinkPara = styled.p`
  cursor: pointer;
  &:hover {
    color: rgba(74, 93, 237, 0.88);
  }
`;

function FooterCard(props) {
  const { heading, content } = props;

  return (
    <>
      <FooterWrapper>
        <h4>{heading}</h4>
        {content.map((item, i) => (
          <LinkPara key={i}>{item}</LinkPara>
        ))}
      </FooterWrapper>
    </>
  );
}

export default FooterCard;

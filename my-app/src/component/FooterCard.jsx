import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  color: #424242;
  font-size: 1.1rem;
  font-weight: 500;

  @media (min-width: 800px) {
    margin-left: 4.5rem;
  }
`;

const LinkPara = styled.p`
  cursor: pointer;
  font-size: 1rem;
  font-weight: normal;

  line-height: 1.5rem;
  &:hover {
    color: rgba(74, 93, 237, 0.88);
  }
`;

function FooterCard(props) {
  const { heading, content } = props;

  return (
    <>
      <FooterWrapper>
        <p>{heading}</p>
        {content.map((item, i) => (
          <LinkPara key={i}>{item}</LinkPara>
        ))}
      </FooterWrapper>
    </>
  );
}

export default FooterCard;

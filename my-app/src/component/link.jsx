import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
const Arrow = styled.div`
  margin: 0.2rem 1rem;
`;
const Link = styled.div`
width:max-content;
display:flex;
  color:#387ed1 ;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

export function BlueLink({ text }) {
  return (
    <>
      <Link>
        <div>{text}</div>
        <Arrow>
          <BsArrowRight />
        </Arrow>
      </Link>
    </>
  );
}


/* 
justify-content:${(props) => (props.alCenter ? "center" : "start")};
font-size:1.1rem;
  color: #3f61bf;
  &:hover {
    color: black;
  };
 margin:1rem 2rem;
 margin-left:0;
 padding-right:0.5rem;
 text-align:${(props) => (props.center ? "center" : "left")};
 & > div{
   padding-right :0.5rem;
 } */


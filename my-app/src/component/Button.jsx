import React from "react";
import styled from "styled-components"

const StyledButton = styled.button`
  font-size: 1.5rem;
  background: #387ed1;
  color: white;
  padding: 0.5rem 2rem;
  border:none;
  border-radius:5px;
  align-self:center;
  &:hover {
    background: #222;
    cursor:pointer;
  }
`;

const style = {
  margin:"2rem"
}

function Button() {
  return (
    <>
      <div style={style}>
        <StyledButton>Sign up now</StyledButton>
      </div>
    </>
  );
}

export default Button;

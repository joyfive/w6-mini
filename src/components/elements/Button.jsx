import React from 'react'
import styled, { css } from 'styled-components'

const Button = (props) => {
  return (
    <StButton {...props} disabled={props.disabled}>
      {props.children}
    </StButton>
  );
}

export default Button;

const StButton = styled.button`
  padding: 10px;
  margin: 5px 5px;
  align-self: center;
  width: 240px;
  height: 40px !important;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;
  border: 0;
  color: #fd5c63;
  border-radius: 10px;
  box-shadow: 0px 2px 10px #e1cccd;
  background-color: white;
  cursor: pointer;
&:hover {
  background-color: #fd5c63;
  border: 0;
  color: white;
}

${({ size }) => {
    switch (size) {
      case "full":
        return css`
          width: 100%;
        `;
      case "large":
        return css`
          width: 50%;
        `;
      case "medium":
        return css`
          width: 200px;
          height: 40px !important;
          padding; 5px;
        `
      case "small":
        return css`
          width: 40px;
          height: 40px !important;
          padding: 10px;
        `;
      case "round":
        return css`
        width: 60px;
        height: 60px !important;
        padding: 20px;
        border-radius: 50px; 
        `;
      default:
      return css`
        width: 240px;
        height: 40px !important;
        padding: 10px;
      `;
    }
  }
}
${({ color }) => {
  switch (color) {
    case "reverse":
      return css`
          color: white;
          background-color: #fd5c63;
        &:hover {
          background-color: white;
          border: 0;
          color: #fd5c63;
      
      }
      `
      case "line":
        return css`
        background-color: white;
        border: 1px solid #fd5c63;
      `
      
    default:
      return css`
          color: #fd5c63;
          background-color: white;
        &:hover {
          background-color: #fd5c63;
          border: 0;
          color: white;
      
      }
      `
}
}
}
`
import React from "react";
import styled, { css } from "styled-components";

const Box = (props) => {
  return (
    <StDiv {...props} disabled={props.disabled}>
      {props.children}
    </StDiv>
  );
};

export default Box;

const StDiv = styled.div`
  padding: 10px;
  margin: 5px 5px;
  width: 240px;
  height: 100%;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;
  border: 0;
  color: #141414;
  border-radius: 10px;
  box-shadow: 0px 2px 10px #e1cccd;
  background-color: white;

  ${({ size }) => {
    switch (size) {
      case "cont":
        return css`
          width: 100%;
          height: 100%;
        `;
      case "medium":
        return css`
          width: 50%;
          padding; 10px;
          margin: 40px auto 40px auto;
          @media screen and (max-width:900px) {
            width: 80%;
          }
          @media scree and (max-width:600px) {
            width: 90%;
          }
        `;
      case "mytitle":
        return css`
          display: flex;
          width: 90%;
          min-width: 300px;
          max-width: 900px;
          margin: 0 auto;
          padding: 0;
          height: 50px !important;
          text-align: center;
          border-radius: 50px;
          box-shadow: ;

          @media screen and (max-width: 1080px) {
            max-width: 600px;
            padding: 12px;
          }
          @media screen and (max-width: 700px) {
            max-width: 300px;
          }
        `;
      case "middle":
        return css`
          width: 90%;
          min-width: 300px;
          max-width: 900px;
          margin: 20px auto;
          height: 40px !important;
          padding: 10px;
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          line-height: 2;
          border-radius: 50px;

          @media screen and (max-width: 1080px) {
            max-width: 600px;
            padding: 12px;
            font-size: 16px;
            line-height: 2.5;
          }
          @media screen and (max-width: 700px) {
            max-width: 300px;
          }
        `;
      case "item":
        return css`
          width: 260px;
          min-height: 160px !important;
          padding: 15px;
          align-self: flex-start;
        `;
      case "list":
        return css`
          width: 100%;
          min-width: 300px;
          max-width: 900px;
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          justify-content: flex-start;
          overflow: auto;
          min-height: 30px !important;
          max-height: 580px;
          margin: 10px auto;
          padding: 20px;
          @media screen and (max-width: 1080px) {
            max-width: 600px;
            padding: 20px;
          }
          @media screen and (max-width: 700px) {
            max-width: 300px;
          }
        `;
      case "cmt":
        return css`
          width: 95%;
          min-height: 30px !important;
          padding: 0 0 5px 0;
          margin: 10px auto;
          display: block;
        `;
      default:
        return css`
          width: 240px;
          height: 30px !important;
          padding: 10px;
          margin: 20px auto;
        `;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "line":
        return css`
          background-color: white;
          border: 1px solid #fd5c63;
        `;
      case "gray":
        return css`
          background-color: #f7f2f4;
        `;
      case "reverse":
        return css`
          background-color: #fd5c63;
          color: white;
        `;
      default:
        return css`
          color: #141414;
          background-color: #fff;
        `;
    }
  }}
`;

import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  width: ${props => props.side};
  position: relative;
  display: inline-block;
  vertical-align: top;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & > div {
    position: absolute;
    top: ${props => props.margin};
    left: ${props => props.margin};
    right: ${props => props.margin};
    bottom: ${props => props.margin};
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default ({ children, ...props }) => (
  <Outer {...props}>
    <div>{children}</div>
  </Outer>
);

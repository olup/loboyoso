import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Menu = styled.div`
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    margin: 10px;
    padding: 5px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    &.selected {
      border-color: black;
    }
  }
`;

const Logo = styled.img`
  margin: 50px auto;
  margin-bottom: 40px;
  display: block;
`;

export default ({ tab }) => (
  <div className="section">
    <div className="content">
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Menu>
        <Link to="/" className={tab === "blog" ? "selected" : ""}>
          Blog
        </Link>
        <Link to="/photos" className={tab === "gallery" ? "selected" : ""}>
          Galerie
        </Link>
        <a href="https://instagram.com/gawelji" target="blank">
          Instagram
        </a>
      </Menu>
    </div>
  </div>
);

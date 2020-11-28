import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NoStyleLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const UnStyledLink = (props) => {
  return <NoStyleLink exact{...props}>{props.children}</NoStyleLink>;
};

export default UnStyledLink;

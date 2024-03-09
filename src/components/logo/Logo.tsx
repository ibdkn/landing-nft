import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo href={"#"}>
            <Icon iconId={"logo"} width={"28"} height={"28"} viewBox={"0 0 28 28"}/>
            <Name>
                Creative<span>art</span>
            </Name>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Name = styled.span`
  font-family: "Canela Trial", sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  color: #fff;
  
  transform: translateY(15px);
  
  span {
    color: #d3f85a;
  }
`
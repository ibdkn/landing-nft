import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo href={"#"}>
            <Icon iconId={"logo"}/>
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
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  color: #fff;
  
  span {
    color: #d3f85a;
  }
`
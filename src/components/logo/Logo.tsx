import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

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
  ${font({family: '"Canela Trial", sans-serif', weight: 500, Fmax: 32, Fmin: 24})};
  line-height: 120%;
  color: ${theme.colors.font};
  
  transform: translateY(15px);
  
  span {
    color: ${theme.colors.accent};
  }

  @media ${theme.media.mobile} {
    transform: translateY(3px);
  }
`
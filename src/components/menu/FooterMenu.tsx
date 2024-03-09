import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const FooterMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledFooterMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <MenuItem key={index}><Link href={"#"}>{item}</Link></MenuItem>
                    )
                })}
            </ul>
        </StyledFooterMenu>
    );
};

const StyledFooterMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const MenuItem = styled.li`
  & + & {
    margin-top: 8px;
  }
`

const Link = styled.a`
  padding-bottom: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;


  &:hover {
    border-bottom: 1px solid ${theme.colors.accent};
  }
`

import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}><Link href={"#"}>{item}</Link></ListItem>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
`

const ListItem = styled.li`
 
`

const Link = styled.a`
  padding-bottom: 2px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  opacity: .72;
  border-bottom: 1px solid transparent;
  
  &:hover {
    opacity: 1;
    border-bottom: 1px solid ${theme.colors.accent};
  }
`

import React from 'react';
import styled from "styled-components";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}><a href={"#"}>{item}</a></li>
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
    
    li {
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: rgba(255, 255, 253, 0.72);
    }
  }
`

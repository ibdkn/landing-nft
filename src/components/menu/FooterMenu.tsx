import React from 'react';
import styled from "styled-components";

export const FooterMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledFooterMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}><a href={"#"}>{item}</a></li>
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

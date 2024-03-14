import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <ListItem key={index}><Link href={"#"}>{item}</Link></ListItem>
                        )
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  
  @media ${theme.media.tablet} {
    display: flex;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 42px;
  right: 15px;
  z-index: 9999999;
  
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.font};
    border-radius: 10px;

    position: absolute;
    top: 0;
    right: 0;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: transparent;
    `}

    &::before {
      content: "";
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      border-radius: 10px;

      position: absolute;
      right: 0;
      transform: translateY(-8px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      border-radius: 10px;

      position: absolute;
      right: 0;
      transform: translateY(8px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(9, 15, 29, 0.9);
  z-index: 99999;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 100%;
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

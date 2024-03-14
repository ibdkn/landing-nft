import React from 'react';
import styled from "styled-components";
import { Button } from '../../components/Button';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import { FlexWrapper } from '../../components/FlexWrapper';
import {theme} from "../../styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const items = ["Marketplace", "Artists", "Community", "Collections"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                    <Button btnType={"primary"}>Contact</Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 28px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.primaryBg};
  z-index: 99999;
  
  ${Button} {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`

import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Button} from "../../components/button/Button";

const items = ["Marketplace", "Artists", "Community", "Collections"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <Button text={"Contact"}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 33px 0 23px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
`

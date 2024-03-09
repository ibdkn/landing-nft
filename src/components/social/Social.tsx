import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type SocialPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Social = (props: SocialPropsType) => {
    return (
        <SocialItem>
            <SocialLink href="">
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            </SocialLink>
        </SocialItem>
    );
};

const SocialItem = styled.ul`
  
`

const SocialLink = styled.a`
  color: #fff;
  
  &:hover {
    color: ${theme.colors.accent};
  }
`


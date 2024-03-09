import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../FlexWrapper";

type ArtistPropsType = {
    src?: string,
    avatar?: string,
    name?: string
}

export const Artist = (props: ArtistPropsType) => {
    return (
        // CHANGE IT LATER !!!!
        <StyledArtist style={{ backgroundImage: `url(${props.src})` }}>
            <FlexWrapper align={"center"} gap={"12px"}>
                <Avatar src={props.avatar} alt=""/>
                <FlexWrapper direction={"column"} gap={"4px"}>
                    <Status>Owner</Status>
                    <Name>{props.name}</Name>
                </FlexWrapper>
            </FlexWrapper>
        </StyledArtist>
    );
};

const StyledArtist = styled.div`
  padding: 24px;
  display: flex;
  align-items: flex-end;
  min-height: 311px;
  background-size: cover;
  border-radius: 16px;
  
  position: relative;
  z-index: 1;
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0 0 16px 16px;
    background: linear-gradient(0deg, rgba(19,30,58,1) 0%, rgba(19,30,58,0) 100%);
    z-index: -1;
  }
  
  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  &:nth-child(2) {
    
    grid-column-start: 2;
    grid-column-end: 3;
  }
  &:nth-child(3) {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  ${FlexWrapper} {
    height: unset;
  }
  
`

const Avatar = styled.img`
  width: 48px;
  height: 48px;
`

const Status = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
`

const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
`

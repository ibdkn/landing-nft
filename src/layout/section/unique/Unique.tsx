import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Card} from "../../../components/card/Card";
import cardImage1 from "../../../assets/images/cards/card-image-1.png"
import cardImage2 from "../../../assets/images/cards/card-image-2.png"
import cardImage3 from "../../../assets/images/cards/card-image-3.png"
import { Container } from '../../../components/Container';
import {theme} from "../../../styles/Theme";

export const Unique = () => {
    return (
        <StyledUnique>
            <Container>
                <FlexWrapper justify={"space-between"} align={"flex-end"}>
                    <SectionTitle>
                        <span>Amazing</span> and Super
                        Unique Art of This <span>Week</span>
                    </SectionTitle>
                    <DesktopButtonWrapper>
                        <Button btnType={"primary"}>See All</Button>
                    </DesktopButtonWrapper>
                </FlexWrapper>
                <CardsList>
                    <Card title={"Cyberpunk Cocomo"} src={cardImage1} price={"490"}/>
                    <Card title={"Charge, Qi tiao yu"} src={cardImage2} price={"490"}/>
                    <Card title={"Surgeon, Josh Rife"} src={cardImage3} price={"490"}/>
                </CardsList>
                <MobileButtonWrapper>
                    <Button btnType={"primary"}>See All</Button>
                </MobileButtonWrapper>
            </Container>
        </StyledUnique>
    );
};

const StyledUnique = styled.section`
  ${SectionTitle} {
    max-width: 506px;
  }

  ${Container} > ${FlexWrapper} {
    @media ${theme.media.tablet} {
      justify-content: center;
    }
  }

`

const CardsList = styled.ul`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media ${theme.media.tablet} {
    margin: 32px 0;
  } 
`

const DesktopButtonWrapper = styled.div`
    @media ${theme.media.tablet} {
      display: none;
    }
`

const MobileButtonWrapper = styled.div`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
    text-align: center;
  }
`

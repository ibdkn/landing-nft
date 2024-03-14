import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import aboutImage1 from "../../../assets/images/about/about-image-1.png"
import aboutImage2 from "../../../assets/images/about/about-image-2.png"
import { Container } from '../../../components/Container';
import {theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Info>
                        <SectionTitle>
                            Create And Sell
                            Your <span>Best NFTs</span>
                        </SectionTitle>
                        <Text>
                            Start exploring the world of digital art and NFTs today and take control of your digital assets
                            with confidence!
                        </Text>
                        <FlexWrapper align={"center"} gap={"36px"}>
                            <Button btnType={"primary"}>Create Now</Button>
                            <Button btnType={"transparent"}>Learn More</Button>
                        </FlexWrapper>
                    </Info>
                    <Images>
                        <Image src={aboutImage1} alt=""/>
                        <Image src={aboutImage2} alt=""/>
                    </Images>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  ${Container} > ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 48px;
    }
  }
`

const Info = styled.div`
  max-width: 426px;

  > ${FlexWrapper} {
    @media ${theme.media.tablet} {
      justify-content: center;
    }
  }
`

const Images = styled.div`
  position: relative;
  width: 740px;
  height: 559px;

  @media screen and (max-width: 1024px) {
    width: 343px;
    height: 260px;
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin: 20px 0 40px;

  @media ${theme.media.tablet} {
    text-align: center;
    margin-bottom: 32px;
  }
`

const Image = styled.img`
  max-width: 410px;
  border-radius: 24px;
  
  &:first-child {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;

    @media screen and (max-width: 1024px) {
      max-width: 190px;
    }
  }

  &:last-child {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;

    @media screen and (max-width: 1024px) {
      max-width: 190px;
    }
  }
`

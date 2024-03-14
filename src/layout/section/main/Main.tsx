import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import photo from "../../../assets/images/main/main.png"
import textCircleImage from "../../../assets/images/main/text-circle.svg"
import textCircleImageMob from "../../../assets/images/main/text-circle-mob.svg"
import {Statistics} from "../../../components/statistics/Statistics";
import {Promotion} from '../../../components/promotion/Promotion';
import { Container } from '../../../components/Container';
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"} gap={"50px"}>
                    <Info>
                        <Title>
                            Discover and Collect The Best NFTs <span>Digital Art.</span>
                        </Title>
                        <Text>
                            Get started with the easiest and most secure platform to buy and trade digital ART and
                            NFT’s.
                            Start exploring the world of digital art and NFTs today and take control of your digital
                            assets
                            with confidence!
                        </Text>
                        <Action>
                            <Button btnType={"primary"}>Explore Now</Button>
                            <Button btnType={"transparent"}>Learn More</Button>
                        </Action>
                        <FlexWrapper gap={"94px"}>
                            <Statistics number={"8.9"} text={"Art work"}/>
                            <Statistics number={"65"} text={"Artist"}/>
                            <Statistics number={"87"} text={"Collection"}/>
                        </FlexWrapper>
                    </Info>
                    <About>
                        <ImageWrapper>
                            <Photo src={photo} alt=""/>
                        </ImageWrapper>
                        <Promotion/>
                    </About>
                </FlexWrapper>
                <MobileStatisticWrapper>
                    <Statistics number={"8.9"} text={"Art work"}/>
                    <Statistics number={"65"} text={"Artist"}/>
                    <Statistics number={"87"} text={"Collection"}/>
                </MobileStatisticWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  position: relative;
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  
  ${Container} > ${FlexWrapper} {
    @media screen and (max-width: 969px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 48px;
      height: max-content;
    }
  }

  @media ${theme.media.mobile} {
    padding-top: 128px;
  }
`

const Info = styled.div`
  max-width: 544px;
  width: 100%;

  >${FlexWrapper} {
    @media screen and (max-width: 969px) {
      display: none;
    }
  }

  @media ${theme.media.mobile} {
    text-align: center;
  }
`

const Title = styled.h2`
  ${font({family: '"Canela Trial", sans-serif', weight: 500, Fmax: 64, Fmin: 39})};
  line-height: 120%;

  span {
    color: ${theme.colors.accent};
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin: 20px 0 40px;

  @media ${theme.media.mobile} {
    margin-bottom: 32px;
  }
`

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-bottom: 72px;

  @media screen and (max-width: 969px) {
   margin-bottom: 0;
  }

  @media ${theme.media.mobile} {
    justify-content: center;
  }
`

const About = styled.div`
  position: relative;
`

const ImageWrapper = styled.div`
  max-width: 464px;
  width: 100%;
  padding-right: 51px;
  box-sizing: unset;

  position: relative;
  z-index: 0;
  
  &::before {
    content: "";
    width: 171px;
    height: 171px;
    background-image: url(${textCircleImage});
    background-size: cover;
    background-repeat: no-repeat;
    
    position: absolute;
    bottom: 149px;
    left: -60px;
    z-index: 1;

    @media screen and (max-width: 1138px) {
      width: 81px;
      height: 81px;
      background-image: url(${textCircleImageMob});
      
      top: 173px;
      bottom: auto;
      left: -29px;
    }
  }

  @media screen and (max-width: 1138px) {
    padding-right: 20px;
    padding-bottom: 76px;
  }
`

const Photo = styled.img`
  max-width: 464px;
  width: 100%;
  border-radius: 24px;

  @media screen and (max-width: 1138px) {
    max-width: 294px;
  }
`

const MobileStatisticWrapper = styled.div`
  display: none;

  @media screen and (max-width: 969px) {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    gap: 28px;
  }
`








import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import photo from "../../../assets/images/main/main.png"
import textCircleImage from "../../../assets/images/main/text-circle.svg"
import {Statistics} from "../../../components/statistics/Statistics";
import {Promotion} from '../../../components/promotion/Promotion';
import { Container } from '../../../components/Container';
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
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
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  position: relative;
  display: flex;
  min-height: 100vh;
`

const Info = styled.div`
  max-width: 544px;
`

const Title = styled.h2`
  font-family: "Canela Trial", sans-serif;
  font-weight: 500;
  font-size: 64px;
  line-height: 120%;

  span {
    color: ${theme.colors.accent}
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin: 20px 0 40px;
`

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-bottom: 72px;
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
  
  img {
    border-radius: 24px;
  }
  
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
  }
  
`

const Photo = styled.img`
  max-width: 464px;
  width: 100%;
`








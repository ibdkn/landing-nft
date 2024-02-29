import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/Button";
import photo from "../../assets/images/main/main.png"
import {Statistics} from "../../components/statistics/Statistics";
import { Timer } from '../../components/Timer';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <Info>
                    <Title>
                        Discover and Collect The Best NFTs <span>Digital Art.</span>
                    </Title>
                    <Text>
                        Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s.
                        Start exploring the world of digital art and NFTs today and take control of your digital assets
                        with confidence!
                    </Text>
                    <Action>
                        <Button>Explore Now</Button>
                        <Button>Learn More</Button>
                    </Action>
                    <FlexWrapper gap={"94px"}>
                        <Statistics number={"8.9"} text={"Art work"}/>
                        <Statistics number={"65"} text={"Artist"}/>
                        <Statistics number={"87"} text={"Collection"}/>
                    </FlexWrapper>
                </Info>
                <About>
                    <Images>
                        <Photo src={photo} alt=""/>
                        {/*<Icon iconId={"circleText"} width={"172"} height={"172"} viewBox={"0 0 172 172"}/>*/}
                    </Images>
                    <Promotion>
                        <FlexWrapper justify={"space-between"}>
                            <div>
                                <div>Ends in</div>
                                <Timer>05:45:47</Timer>
                            </div>
                            <div>
                                <div>Current bid</div>
                                <div>0.24ETH</div>
                            </div>
                        </FlexWrapper>
                        <Button>Place A Bid</Button>
                    </Promotion>
                </About>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 89vh;
  background-color: #202323;
`

const Info = styled.div`
  max-width: 544px;
`

const Title = styled.h2`
  font-size: 64px;
  margin-bottom: 20px;
  
  span {
    color: #d3f85a;
  }
`

const Text = styled.p`
  margin-bottom: 40px;
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

const Images = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    left: -60px;
    bottom: 150px;
  }
`

const Photo = styled.img`
  max-width: 464px;
  width: 100%;
`

const Promotion = styled.div`
  
  max-width: 304px;
  width: 100%;
  background: #131e3a;
  border: 1px solid #fff;
`






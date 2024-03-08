import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Social} from "../../components/social/Social";
import {FooterMenu} from "../../components/menu/FooterMenu";

const exploreItems = ["Art Sign In", "Collectibles", "Domain Name", "Utility"];
const statisticItems = ["Ranking", "Collectibles", "Activity"];
const companyItems = ["About Us", "Career", "Support", "Partners"];
const resourcesItems = ["Help Center", "Platform Status", "Community"];

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"}>
                <Info>
                    <Logo/>
                    <Text>
                        Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy
                        it!
                    </Text>
                    <SocialList>
                        <Social iconId={"facebook"} width={"24"} height={"24"} viewBox={"0 0 24 24"}/>
                        <Social iconId={"telegram"} width={"24"} height={"24"} viewBox={"0 0 24 24"}/>
                        <Social iconId={"twitter"} width={"24"} height={"24"} viewBox={"0 0 24 24"}/>
                        <Social iconId={"linkedin"} width={"24"} height={"24"} viewBox={"0 0 24 24"}/>
                    </SocialList>
                </Info>
                <FlexWrapper justify={"center"} gap={"94px"}>
                    <div>
                        <Title>Explore</Title>
                        <FooterMenu menuItems={exploreItems}/>
                    </div>
                    <div>
                        <Title>Statistic</Title>
                        <FooterMenu menuItems={statisticItems}/>
                    </div>
                    <div>
                        <Title>Company</Title>
                        <FooterMenu menuItems={companyItems}/>
                    </div>
                    <div>
                        <Title>Resources</Title>
                        <FooterMenu menuItems={resourcesItems}/>
                    </div>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <Copyright>
                    © Copyright 2023 - Creativeart
                </Copyright>
                <Terms>
                    <a href={"#"}>Privacy Policy</a>
                    <a href={"#"}>Terms & Conditions</a>
                </Terms>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 30vh;
  background-color: #000000;
  
  >div:first-child {
    padding-bottom: 48px;
    margin-bottom: 48px;
    border-bottom: 1px solid #ffffff;
  }
`

const Info = styled.div`
  max-width: 272px;
`

const Text = styled.p`

`

const SocialList = styled.ul`
  display: flex;
  gap: 14px;
`

const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 24px;
`

const Copyright = styled.p`
  
`

const Terms = styled.p`
  display: flex;
  gap: 28px;
`


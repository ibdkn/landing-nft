import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Social} from "../../components/social/Social";
import {FooterMenu} from "../../components/menu/FooterMenu";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

const exploreItems = ["Art Sign In", "Collectibles", "Domain Name", "Utility"];
const statisticItems = ["Ranking", "Collectibles", "Activity"];
const companyItems = ["About Us", "Career", "Support", "Partners"];
const resourcesItems = ["Help Center", "Platform Status", "Community"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Info>
                        <Logo/>
                        <Text>
                            Discover NFTs by category, track the latest drop, and and follow the collections you love.
                            Enjoy
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
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 92px 0;
  background-color: ${theme.colors.primaryBg};

  ${Container} {
    > div:first-child {
      padding-bottom: 48px;
      margin-bottom: 48px;
      border-bottom: 1px solid #ffffff;
    }
  }
`

const Info = styled.div`
  max-width: 272px;
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin: 20px 0 24px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 14px;
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 24px;
`

const Copyright = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`

const Terms = styled.p`
  display: flex;
  gap: 28px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  
  & a:hover {
    color: ${theme.colors.accent};
  }
`


import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import subscribeImage1 from "../../../assets/images/subscribe/subscribe-image-1.png"
import subscribeImage2 from "../../../assets/images/subscribe/subscribe-image-2.png"
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import { Container } from '../../../components/Container';
import {theme} from "../../../styles/Theme";

export const Subscribe = () => {
    return (
        <StyledCreate>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Images>
                        <Image src={subscribeImage1} alt=""/>
                        <Image src={subscribeImage2} alt=""/>
                    </Images>
                    <Info>
                        <SectionTitle>
                            Subscribe And <span>get our Updates</span> Every Week
                        </SectionTitle>
                        <Text>
                            We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly
                        </Text>
                        <Form>
                            <Field type="text" placeholder={"Enter your e-mail"}/>
                            <Button btnType={"primary"}>Subscribe</Button>
                        </Form>
                    </Info>
                </FlexWrapper>
            </Container>
        </StyledCreate>
    );
};

const StyledCreate = styled.section`

`

const Images = styled.div`
  width: 597px;
  height: 421px;
  
  position: relative;
`

const Image = styled.img`
  &:first-child {
    max-width: 410px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:last-child {
    max-width: 282px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

const Info = styled.div`
  max-width: 520px;
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  margin: 20px 0 40px;
`

const Form = styled.form`
  position: relative;
  
  ${Button} {
    position: absolute;
    top: 4px;
    right: 4px;
    bottom: 4px;
  }
`

const Field = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  padding: 16px 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${theme.colors.font};
  background-color: ${theme.colors.secondaryBg};
  border: none;

  &::placeholder {
    color: rgba(255, 255, 253, 0.72);
  }

  &:focus-visible {
    outline: 1px solid rgba(76, 107, 185, 0.5);
  }
`

import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import subscribeImage1 from "../../../assets/images/subscribe/subscribe-image-1.png"
import subscribeImage2 from "../../../assets/images/subscribe/subscribe-image-2.png"
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Subscribe = () => {
    return (
        <StyledCreate>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Images>
                    <Image src={subscribeImage1} alt=""/>
                    <Image src={subscribeImage2} alt=""/>
                </Images>
                <Info>
                    <SectionTitle>
                        Subscribe And get our Updates Every Week
                    </SectionTitle>
                    <Text>
                        We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly
                    </Text>
                    <Form>
                        <input type="text" placeholder={"Enter your e-mail"}/>
                        <Button>Subscribe</Button>
                    </Form>
                </Info>
            </FlexWrapper>
        </StyledCreate>
    );
};

const StyledCreate = styled.section`
  min-height: 80vh;
  background-color: #202323;
`

const Images = styled.div`
  
`

const Image = styled.img`
  
`

const Info = styled.div`
  max-width: 520px;
`

const Text = styled.p`
  
`

const Form = styled.form`
  
`

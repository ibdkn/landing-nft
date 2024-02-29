import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";
import {Button} from "../Button";
import { Timer } from '../Timer';

type CardPropsType = {
    title: string,
    src: string,
    price: string
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <Image src={props.src} alt=""/>
            <FlexWrapper justify={"space-between"}>
                <Title>{props.title}</Title>
                <FlexWrapper>
                    <Icon iconId={"cardIcon"} width={"24"} height={"25"} viewBox={"0 0 24 25"}/>
                    <div>{props.price}ETH</div>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <FlexWrapper direction={"column"}>
                    <p>Ending In</p>
                    <FlexWrapper align={"center"} gap={"12px"}>
                        <Icon iconId={"clock"} width={"24"} height={"25"} viewBox={"0 0 24 25"}/>
                        <Timer>03:24:56</Timer>
                    </FlexWrapper>
                </FlexWrapper>
                <Button>Place A Bid</Button>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.li`
  max-width: 410px;
  width: 100%;
  background: #131e3a;
`

const Title = styled.h3`
  
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 16px;
`


import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";
import {Button} from "../Button";
import { Timer } from '../Timer';
import { StyledCard } from '../StyledCard';

type CardPropsType = {
    title: string,
    src: string,
    price: string
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <Image src={props.src} alt=""/>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Title>{props.title}</Title>
                <FlexWrapper align={"center"}>
                    <Icon iconId={"cardIcon"} width={"24"} height={"25"} viewBox={"0 0 24 25"}/>
                    <Currency>{props.price}ETH</Currency>
                </FlexWrapper>
            </FlexWrapper>
            <Action>
                <FlexWrapper justify={"space-between"}>
                    <FlexWrapper direction={"column"} gap={"4px"}>
                        <EndingTitle>Ending In</EndingTitle>
                        <FlexWrapper align={"center"} gap={"12px"}>
                            <Icon iconId={"clock"} width={"24"} height={"25"} viewBox={"0 0 24 25"}/>
                            <Timer>03:24:56</Timer>
                        </FlexWrapper>
                    </FlexWrapper>
                    <Button btnType={"outline"}>Place A Bid</Button>
                </FlexWrapper>
            </Action>
        </StyledCard>
    );
};

const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 23px;
`

const Currency = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
`

const Action = styled.div`
  margin-top: 16px;
`

const EndingTitle = styled.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #838382;
`


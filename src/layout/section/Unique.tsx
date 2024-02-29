import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Card} from "../../components/card/Card";
import cardImage1 from "../../assets/images/cards/card-image-1.png"
import cardImage2 from "../../assets/images/cards/card-image-2.png"
import cardImage3 from "../../assets/images/cards/card-image-3.png"

export const Unique = () => {
    return (
        <StyledUnique>
            <FlexWrapper justify={"space-between"} align={"flex-end"}>
                <SectionTitle>
                    Amazing and Super
                    Unique Art of This Week
                </SectionTitle>
                <Button>See All</Button>
            </FlexWrapper>
            <CardsList>
                <Card title={"Cyberpunk Cocomo"} src={cardImage1} price={"490"}/>
                <Card title={"Charge, Qi tiao yu"} src={cardImage2} price={"490"}/>
                <Card title={"Surgeon, Josh Rife"} src={cardImage3} price={"490"}/>
            </CardsList>
        </StyledUnique>
    );
};

const StyledUnique = styled.section`
  min-height: 90vh;
  background: #000000;
`

const CardsList = styled.ul`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  gap: 30px;
`

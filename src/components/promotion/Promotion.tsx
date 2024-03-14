import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../FlexWrapper";
import {Timer} from "../Timer";
import {Button} from "../Button";
import {theme} from "../../styles/Theme";
import {StyledCard} from "../StyledCard";

export const Promotion = () => {
    return (
        <StyledPromotion>
            <StyledCard>
                <FlexWrapper justify={"space-between"}>
                    <div>
                        <Title>Ends in</Title>
                        <Timer>05:45:47</Timer>
                    </div>
                    <div>
                        <Title>Current bid</Title>
                        <Text>0.24ETH</Text>
                    </div>
                </FlexWrapper>
                <Button btnType={"outline"}>Place A Bid</Button>
            </StyledCard>
        </StyledPromotion>
    );
};

const StyledPromotion = styled.div`
  max-width: 304px;
  width: 100%;

  position: absolute;
  right: 0;
  bottom: -93px;
  
  ${Button} {
    width: 100%;
    margin-top: 24px;
  }

  @media screen and (max-width: 1138px) {
    max-width: 224px;
    right: 0;
    bottom: 0;
  }
}
`

const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${theme.colors.accent};
  margin-bottom: 8px;
`

const Text = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
`

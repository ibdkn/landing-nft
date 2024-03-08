import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../FlexWrapper";
import {Timer} from "../Timer";
import {Button} from "../Button";

export const Promotion = () => {
    return (
        <StyledPromotion>
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
        </StyledPromotion>
    );
};

const StyledPromotion = styled.div`
  max-width: 304px;
  width: 100%;
  background: #131e3a;
  border: 1px solid #fff;
`

import React from 'react';
import styled from 'styled-components';
import {theme} from "../../styles/Theme";

type StatisticsPropsType = {
    number: string,
    text: string
}

export const Statistics = (props: StatisticsPropsType) => {
    return (
        <StyledStatistics>
            <Number>
                    <span>
                        {props.number}
                    </span>
                K
            </Number>
            <Text>{props.text}</Text>
        </StyledStatistics>
    );
};

const StyledStatistics = styled.div`
  &:not(:last-child) {
    padding-right: 28px;
    border-right: 1px solid ${theme.colors.accent};
  }
`

const Number = styled.div`
  font-family: ${theme.fonts.secondary};
  font-weight: 500;
  font-size: 48px;
  line-height: 120%;
  
  span {
    color: ${theme.colors.accent};
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`



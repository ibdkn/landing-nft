import React from 'react';
import styled from 'styled-components';

type StatisticsPropsType = {
    number: string,
    text: string
}

export const Statistics = (props: StatisticsPropsType) => {
    return (
        <StyledStatistics>
            <li>
                <Number>
                    {props.number}
                    <span>K</span>
                </Number>
                <Text>{props.text}</Text>
            </li>
        </StyledStatistics>
    );
};

const StyledStatistics = styled.ul`
  
`

const Number = styled.div`
  font-weight: 500;
  
  span {
    color: #fffffd;
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #fffffd;
`



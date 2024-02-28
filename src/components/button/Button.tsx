import React from 'react';
import styled from "styled-components";

export const Button = (props: {text: string}) => {
    return (
        <StyledButton>{props.text}</StyledButton>
    );
};

const StyledButton = styled.button`
  max-width: max-content;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #090f1d;
  border-radius: 8px;
  padding: 12px 40px;
  background: #d3f85a;
`

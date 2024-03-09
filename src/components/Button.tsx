import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type ButtonPropsType = {
    btnType?: "primary" | "outline" | "transparent"
}

export const Button = styled.button<ButtonPropsType>`
  padding: 14px 40px;
  border-radius: 8px;

  ${props => props.btnType === "primary" && css<ButtonPropsType>`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: ${theme.colors.primaryBg};
    border: 1px solid transparent;
    background-color: ${theme.colors.accent};
    border-radius: 8px;

    &:hover {
      color: ${theme.colors.accent};
      border: 1px solid ${theme.colors.accent};
      background-color: transparent;
    }
  `}

  ${props => props.btnType === "outline" && css<ButtonPropsType>`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: ${theme.colors.accent};
    border: 1px solid ${theme.colors.accent};
    background-color: transparent;

    &:hover {
      color: ${theme.colors.primaryBg};
      background-color: ${theme.colors.accent};
      border-radius: 8px;
    }
  `}

  ${props => props.btnType === "transparent" && css<ButtonPropsType>`
    padding: 0 0 4px 0;
    border-radius: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: ${theme.colors.font};
    background-color: transparent;
    border-bottom: 1px solid transparent;
    transform: translateY(2px);

    &:hover {
      border-bottom: 1px solid ${theme.colors.accent};;
    }
  `}
`
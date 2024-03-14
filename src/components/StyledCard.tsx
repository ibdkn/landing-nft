import styled from "styled-components";
import {theme} from "../styles/Theme";

export const StyledCard = styled.div`
  padding: 20px;
  background-color: ${theme.colors.secondaryBg};
  border-top: 1px solid ${theme.colors.accent};
  border-radius: 16px;
  height: max-content;

  @media screen and (max-width: 1138px) {
    padding: 12px;
  }
`
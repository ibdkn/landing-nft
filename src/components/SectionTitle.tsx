import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h3`
  font-family: ${theme.fonts.secondary};
  font-weight: 500;
  font-size: 48px;
  line-height: 120%;
  
  span {
    color: ${theme.colors.accent};
  }
`
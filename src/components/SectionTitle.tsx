import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h3`
  ${font({family: '"Canela Trial", sans-serif', weight: 500, Fmax: 48, Fmin: 31})};
  line-height: 120%;
  
  span {
    white-space: nowrap;
    color: ${theme.colors.accent};
  }

  @media ${theme.media.tablet} {
    text-align: center;
  }
`
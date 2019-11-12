import styled from "styled-components";
import { Logo } from "../../Logo";
import { Heading } from "../../Heading";
import { media } from "../../../styles/media";

export const HeadingStyled = styled(Heading)`
  margin-bottom: ${props => props.theme.spacing.small};
  /* Media queries */
  ${media.medium`
    display: inline-block;
    margin-right: ${props => props.theme.spacing.small};
    ${props => `margin-${props.theme.locale.dir === "rtl" ? "left" : "right"}: ${props.theme.spacing.small}`};
    margin-bottom: 0;
    &&& {
      font-weight: ${props => props.theme.font.weight.light};
    }
  `};
`;

export const LogoStyled = styled(Logo)`
  width: 86px;
  height: 12px;
  margin: 0 ${props => props.theme.spacing.xsmall};
  /* Media queries */
  ${media.medium`
    width: 100px;
    height: 14px;
  `};
`;

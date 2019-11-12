import styled from "styled-components";
import { Button } from "../../Button";
import { Heading } from "../../Heading";
import { media } from "../../../styles/media";

export const ButtonStyled = styled(Button)`
  margin: ${props => props.theme.spacing.small};
  /* Media queries */
  ${media.large`
    margin: ${props => props.theme.spacing.small};
  `};
`;

export const HeadingStyled = styled(Heading)`
  margin-bottom: ${props => props.theme.spacing.default};
`;

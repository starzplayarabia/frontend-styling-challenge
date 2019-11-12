import styled from "styled-components";
import { Heading } from "../../../Heading";
import { media } from "../../../../styles/media";

export const WeAreStyled = styled.article`
  background-color: ${props => props.theme.color.secondary};
  padding: ${props => props.theme.spacing.large} 0;
  margin: ${props => props.theme.spacing.large} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeadingStyled = styled(Heading)`
  &&& {
    color: ${props => props.theme.color.black};
  }
  margin: 0 ${props => props.theme.spacing.default};
  > small {
    display: block;
    font-weight: ${props => props.theme.font.weight.regular};
    margin-top: ${props => props.theme.spacing.small};
  }
  /* Media queries */
  ${media.medium`
    display: inline-block;
  `};
`;

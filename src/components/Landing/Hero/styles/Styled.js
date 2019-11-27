import styled from "styled-components";
import { Heading } from "../../../Heading";
import { media } from "../../../../styles/media";
import { shadowStyled } from "../../../../styles/shared-styles";

export const HeroStyled = styled.section`
  min-height: 60vh;
  text-align: center;
  background: ${props =>
    `url(${props.background}${
      !!props.responsive ? "" : "-xs"
    }.jpg)`} 0 100% / cover no-repeat ${props => props.theme.color.greyBlack};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0 ${props => props.theme.spacing.medium};
  content: "${props => props.backgroundLocale}";  
  &::after {
    ${props =>
      shadowStyled("bottom", "0", "100%", props.theme.color.blackRGB, 1)};
  }
  /* Media queries */
  ${media.medium`
    min-height: 80vh;
  `}
`;

export const HeadingStyled = styled(Heading)`
  z-index: ${props => props.theme.zIndex.base};
  user-select: none;
`;

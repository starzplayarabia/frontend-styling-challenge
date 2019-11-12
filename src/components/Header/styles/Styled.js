import styled from "styled-components";
import Burger from "../../Burger/Burger";

export const HeaderStyled = styled.header`
  z-index: ${props => props.theme.zIndex.high};
`;

export const BurgerStyled = styled(Burger)`
  position: relative;
  z-index: ${props => {console.log(props.theme.zIndex.high);return props.theme.zIndex.high}};
`;

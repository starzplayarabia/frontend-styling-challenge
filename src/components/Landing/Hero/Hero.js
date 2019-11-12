import React from "react";
import { HeroStyled, HeadingStyled } from "./styles/Styled";

const Hero = ({ background, backgroundLocale = false, responsive = true, heroTitle, size }) => (
  <HeroStyled background={background} backgroundLocale={backgroundLocale} responsive={responsive}>
    <HeadingStyled rank={1} text={heroTitle} size={size} ariaLabelledby={heroTitle} />
  </HeroStyled>
);

export default Hero;

import React from "react";
import { WeAreStyled, HeadingStyled } from "./styles/Styled";

const WeAre = () => (
  <WeAreStyled>

        We are <small>#1</small>
    <HeadingStyled
      rank={2}
      text="The most popular streaming TV service in the region."
      size="medium"
      ariaLabelledby="The most popular streaming TV service in the region."
    />
  </WeAreStyled>
);

export default WeAre;

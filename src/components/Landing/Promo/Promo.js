import React from "react";
import { PromoStyled, HeadingTitleStyled, HeadingStyled } from "./styles/Styled";

const Promo = ({
  title,
  text,
  children,
  background = false,
  backgroundSize,
  responsive = true,
  direction,
  size,
  fileExtension
}) => (
  <>
    {title && <HeadingTitleStyled rank={2} text={title} size={size} />}
    <PromoStyled
      background={background}
      backgroundSize={backgroundSize}
      responsive={responsive}
      direction={direction}
      fileExtension={fileExtension}
    >
      <HeadingStyled rank={3} text={text} size={size} ariaLabelledby={text} />
      {children}
    </PromoStyled>
  </>
);

export default Promo;

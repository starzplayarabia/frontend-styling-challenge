import React from "react";
import { LogoStyled, PathStyled } from "./styles/Styled";

class Logo extends React.PureComponent {
  render() {
    const { className, width, height, fill } = this.props;
    return (
      <LogoStyled className={className} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
        <PathStyled />
      </LogoStyled>
    );
  }
}

export default Logo;

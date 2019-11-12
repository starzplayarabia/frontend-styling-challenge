import React, { useState, useEffect } from "react";
import { Dropdown } from "../Dropdown";
import Menu from "../Menu";
import { HeaderStyled, BurgerStyled } from "./styles/Styled";
import logo from "./images/starzplay_en.svg";

function getLanguageSelectorItems() {
  return [
    {
      content: "English",
      value: "en"
    },
    {
      content: "العربية",
      value: "ar"
    },
    {
      content: "Français",
      value: "fr"
    }
  ];
}

function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("noScrolling", isBurgerMenuOpen);
  });

  function handleOpened() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <HeaderStyled>
      <BurgerStyled isOpened={isBurgerMenuOpen} onClick={handleOpened} ariaLabel="Menu" />
      <Menu isOpened={isBurgerMenuOpen} />
      <img src={logo} alt="Brilliant TV. Every time." />
      <ul>
        <a href="" role={"link"}>
          Explore
        </a>
        <a href="" role={"link"}>
          Login
        </a>
        <Dropdown
          items={getLanguageSelectorItems()}
          icon={"languageGlobe"}
          optionsPosition={"center"}
          selectedItem={0}
        />
      </ul>
    </HeaderStyled>
  );
}

export default Header;

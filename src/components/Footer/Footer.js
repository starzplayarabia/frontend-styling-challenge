import React from "react";
import AppLogos from "../AppLogos";
import {
  HeadingStyled,
  LogoStyled
} from "./styles/Styled";

const LINK_ROLE = "link";

function getLanguageListItems() {
  return [
    {
      code: "en",
      text: "English",
      direction: "ltr",
      separator: ","
    },
    {
      code: "ar",
      text: "Arabic",
      direction: "rtl",
      separator: "،"
    },
    {
      code: "fr",
      text: "Français",
      direction: "ltr",
      separator: ","
    }
  ];
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <nav>
        <HeadingStyled rank={5} text="Questions?" size={"default"} />
        <ul>
          <li><a href="" role={LINK_ROLE} title="Contact">
            Contact
          </a></li>
          <li><a href="" role={LINK_ROLE} title="FAQ">
            FAQ
          </a></li>
          <li><a href="" role={LINK_ROLE} title="Terms & Conditions">
            Terms & Conditions
          </a></li>
        </ul>
      </nav>

      <nav>
        <HeadingStyled rank={5} text="Language" size={"default"} />
        <ul>
          { getLanguageListItems().map(language => (<li><a href="" title={language.text}>{language.text}</a></li>)) }
        </ul>
      </nav>

      <AppLogos />

      <div>
        <small>© {currentYear}</small>
        <LogoStyled />
      </div>
    </footer>
  );
}

export default Footer;

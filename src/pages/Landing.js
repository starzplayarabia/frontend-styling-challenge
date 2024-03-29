import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Landing/Hero";
import WeAre from "../components/Landing/WeAre";
import Promo from "../components/Landing/Promo";
import { Tabs } from "../components/Tabs";
import StickyBanner from "../components/StickyBanner";
import {TabUser as Tab1, TabDevices as Tab2, TabDownload as Tab3} from "../components/Landing/Tabs";
import whatsTrendingImage from "./images/whatsTrending-lg.png";

const tabsLayout = () => [
  {tabTitle: "Subscription", tabIcon: "user", tabContent: <Tab1/>},
  {tabTitle: "Devices", tabIcon: "devices", tabContent: <Tab2/>},
  {tabTitle: "Download", tabIcon: "download", tabContent: <Tab3/>}
];

const Landing = () => {
  console.log("Public URL: ", process.env.PUBLIC_URL);
  return (
    <>
      <Layout>
        <Hero
          background={"/images/starzplay_covers-lg"}
          heroTitle="Imagine the best entertainment all in one place"
          size={"largest"}
        />
        <WeAre/>
        <Promo title="Whats trending " size={"xlarge"}>
          <picture>
            <img src={whatsTrendingImage} alt="What's trending" />
          </picture>
        </Promo>
        <Promo
          background={"/images/promo1-lg"}
          backgroundLocale={true}
          text="Turn your Smart TV into <strong>Brillian TV</strong>"
          direction={"end"}
        />
        <Promo
          background={"/images/promo2-lg"}
          backgroundLocale={true}
          text="Get thousands of titles in your pocket"
          direction="start"
        />
        <Tabs layout={tabsLayout()}/>
      </Layout>
      <StickyBanner title="Start your free trial. Sign up with:" />
    </>
  );
};

export default Landing;

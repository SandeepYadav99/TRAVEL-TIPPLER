import React from "react";
import SocialMedia_Links from "./SocialMedia_Links";
import PickPlaceFor_Travel from "./PickPlaceFor_Travel";
import RelatedPost_Links from "./RelatedPost_Links";
import Rights_TravelTipler from "./Rights_TravelTipler";

const Footer = () => {
  return (
    <footer className=" left-0 right-0 w-full bg-black  ">
      <PickPlaceFor_Travel />
      <RelatedPost_Links />
      <Rights_TravelTipler />
      <SocialMedia_Links />
    </footer>
  );
};

export default Footer;

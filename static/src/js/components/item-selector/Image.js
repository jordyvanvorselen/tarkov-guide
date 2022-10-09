import React from "react";
import PropTypes from "prop-types";

import { capitalize } from "lodash";

const CUSTOMS_URL =
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9f/Customs_Banner.png/revision/latest/scale-to-width-down/382?cb=20200811151055";
const WOODS_URL =
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3e/Banner_woods.png/revision/latest/scale-to-width-down/382?cb=20171101223132";
const SHORELINE_URL =
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d5/Banner_shoreline.png/revision/latest/scale-to-width-down/382?cb=20171101223501";
const FACTORY_URL =
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1a/Factory-Day_Banner.png/revision/latest/scale-to-width-down/382?cb=20200811153020";
const LIGHTHOUSE_URL =
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/dc/Banner_lighthouse.png/revision/latest/scale-to-width-down/382?cb=20211213001748";
const RESERVE_URL =
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f4/Reserve.png/revision/latest/scale-to-width-down/382?cb=20191101214624";
const INTERCHANGE_URL =
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3e/Banner_interchange.png/revision/latest/scale-to-width-down/382?cb=20200811153253";

const getMapUrl = (map) => {
  if (map == "customs") return CUSTOMS_URL;
  if (map == "woods") return WOODS_URL;
  if (map == "shoreline") return SHORELINE_URL;
  if (map == "factory") return FACTORY_URL;
  if (map == "lighthouse") return LIGHTHOUSE_URL;
  if (map == "reserve") return RESERVE_URL;
  if (map == "interchange") return INTERCHANGE_URL;
};

const Image = ({ map }) => {
  return (
    <img
      src={getMapUrl(map)}
      alt=""
      className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white ring-slate-700 group-hover:ring-white"
      loading="lazy"
      decoding="async"
      title={capitalize(map)}
    />
  );
};

Image.propTypes = {
  map: PropTypes.oneOf([
    "customs",
    "woods",
    "shoreline",
    "factory",
    "lighthouse",
    "reserve",
    "interchange",
  ]).isRequired,
};

export default Image;

import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import API from "../utils/API";

const MapCard = ({ item }) => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  }, []);

  let {
    id,
    name,
    street,
    city,
    state,
    zip,
    country,
    phone,
    url,
    overall,
  } = item;

  const urlLink = "https://" + url;

  return (
    <div>
      <h1 value={id}>
        {street}
        {", "}
        {city}
        {", "}
        {state}
      </h1>
    </div>
  );
};

export default MapCard;

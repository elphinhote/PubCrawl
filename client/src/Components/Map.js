import React, { useState, useEffect, useMemo } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";

const Map = (props) => {
  const markers = useMemo(
    () =>
      props.coordinate.length === 0
        ? null
        : props.coordinate.map((c, index) => (
            <Marker
              key={index}
              longitude={parseFloat(c.lng)}
              latitude={parseFloat(c.lat)}
            >
              <div className="teal-text text-darken-1">{c.name}</div>
              <button className="marker-btn">
                <img src="/marker-stroked-15.svg" />
              </button>
            </Marker>
          )),
    [props.coordinate]
  );

  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    width: "70vw",
    height: "50vh",
    zoom: 10,
  });

  console.log(props.coordinate[0]);

  // const coordinates = async () => {
  //   let latCoord = localStorage.getItem("auth-token");
  //   if (token === null) {
  //     localStorage.setItem("auth-token", "");
  //   } else {
  //     try {
  //       const userRes = await axios.get("/users", {
  //         headers: { "x-auth-token": token },
  //       });

  //       setUserData({ token, user: userRes.data });
  //     } catch (err) {
  //       console.log("User must login");
  //     }
  //   }
  // };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {markers}
      </ReactMapGL>
    </div>
  );
};

export default Map;

import React, { useState, useEffect, useMemo } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    width: "50vw",
    height: "50vh",
    zoom: 10,
  });

  // useEffect(() => {
  //   axios({
  //     url: "/local_bars/coordinate",
  //     method: "POST",
  //     data: { idArray: props.searchId },
  //   }).then((res) => console.log(res.data));
  // }, [props.searchId]);
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
              <div>{c.name}</div>
            </Marker>
          )),
    [props.coordinate]
  );

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

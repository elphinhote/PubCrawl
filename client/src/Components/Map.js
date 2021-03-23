// import React, { useRef, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// // eslint-disable-next-line import/no-webpack-loader-syntax
// import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

// mapboxgl.workerClass = MapboxWorker;
// mapboxgl.accessToken =
//   "pk.eyJ1IjoiYnJhY2Ftb24iLCJhIjoiY2ttZnQ5cW1hMDJqOTJ1bzU1bGR0amJqNSJ9.rCkhuKYjnA7G-Dfy9abrBg";

// const Map = () => {
//   const mapContainer = useRef();
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [lng, lat],
//       zoom: zoom,
//     });
//     map.on("move", () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });
//     return () => map.remove();
//   }, []);
//   return (
//     <div>
//       <div className="map-container" ref={mapContainer} />
//       <div>
//         <div className="sidebar">
//           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//         <div className="map-container" ref={mapContainer} />
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<Map />, document.getElementById("app"));
// export default Map;

import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    width: "55vw",
    height: "55vh",
    zoom: 10,
  });

  return (
    <div className="container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYnJhY2Ftb24iLCJhIjoiY2ttbWMwcWYxMWpsdjJvczJlNHllYW94aCJ9.uIQoCpsbD0DytIkcTduDJg"
        }
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
    </div>
  );
};

export default Map;

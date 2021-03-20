import React from "react";
import SearchCrawl from "../Components/SearchCrawl";

const PubCrawl = () => {
  return (
    <div>
      <div className="row container">
        <div className="col s12 m12 l12">
          <div className="card-panel teal">
            <SearchCrawl />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PubCrawl;

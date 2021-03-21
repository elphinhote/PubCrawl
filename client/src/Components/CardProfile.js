import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import API from "../utils/API";
import { useHistory } from "react-router-dom";


const CardProfile = ({ item, index, deleteFromFav }) => {
  const history = useHistory();
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }, []);
  console.log(item);

  let {
    _id,
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
      <div className="row" id="barList">
        <div className="col s12 m6 l6">
          <div className="card grey lighten-5">
            <div className="card-content grey-text">
              <h5 className="#bar-name">{name}</h5>
              <ul>
                <li className="#street-name">{street}</li>
                <li className="#city-state-zip">
                  {city}, {state}, {zip}
                </li>
                <li className="#city-state-zip">{country}</li>
                <li className="phone">{phone}</li>
                <li>
                  <a className="url" href={urlLink}>
                    {url}
                  </a>
                </li>
                <li className="overall">Rating: {overall}</li>
              </ul>
              <div className="card-action"></div>

              {/* <!-- Modal Trigger --> */}
              <button data-target={_id} className="btn modal-trigger">
                Update
              </button>
              <button
                data-index={index}
                onClick={deleteFromFav}
                // className="btn-floating halfway waves-effect waves-light red"
              >
                  Remove 
              </button>

              {/* <!-- Modal Structure --> */}
              <div id={_id} className="modal">
                <div className="modal-content">
                  <h5 className="#bar-name">{name}</h5>
                  <ul>
                    <li className="#street-name">{street}</li>
                    <li className="#city-state-zip">
                      {city}, {state}, {zip}
                    </li>
                    <li className="#city-state-zip">{country}</li>
                    <li className="phone">{phone}</li>
                    <li>
                      <a className="url" href={urlLink}>
                        {url}
                      </a>
                    </li>
                    <li className="overall">Rating: {overall}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;

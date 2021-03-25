import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import API from "../utils/API";
import { toast } from "react-toastify";

const Cards = ({ item }) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  function handleModalSubmit(event) {
    event.preventDefault();
    API.saveBar({
      name,
      street,
      city,
      state,
      zip,
      country,
      phone,
      url,
      overall,
    });
    toast.success("Bar Added");
  }

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
      <div className="row" id="barList">
        <div className="col s12 m6 l6">
          <div className="card grey lighten-5">
            <div className="card-content grey-text">
              <h5 className="#bar-name grey-text text-darken-1">{name}</h5>

              <div className="card-action"></div>

              {/* <!-- Modal Trigger --> */}
              <button
                data-target={id}
                className="btn modal-trigger grey darken-4 grey-text text-lighten-2"
              >
                details
              </button>

              {/* <!-- Modal Structure --> */}
              <div id={id} className="modal">
                <div className="modal-content">
                  <h5 className="#bar-name grey-text text-darken-4">{name}</h5>
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
                  <button
                    data-target={id}
                    onClick={handleModalSubmit}
                    className="btn-floating halfway waves-effect waves-light red"
                  >
                    <i id={id} className="material-icons">
                      favorite
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

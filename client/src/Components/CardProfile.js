import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import API from "../utils/API";
import { useHistory } from "react-router-dom";

const CardProfile = ({ item, index, deleteFromFav }) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }, []);

  const history = useHistory();
  const [updateBarForm, setUpdateBarForm] = useState();

  const onChange = (e) => {
    setUpdateBarForm({ ...updateBarForm, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();

    try {
      const updateBar = await API.updateBar(updateBarForm, _id);
      console.log(updateBar);
      history.push("/profile");
      window.location.reload();
    } catch (err) {
      console.log("Couldn't save new Bar");
    }
  };

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

  const buttonStyleProfile = {
    backgroundColor: "#24a3a0",
    color: "#ffffff",
    marginRight: "20px",
  };

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
              <button
                style={buttonStyleProfile}
                data-target={_id}
                className="btn modal-trigger"
              >
                Update
              </button>
              <button
                style={buttonStyleProfile}
                className="btn modal-trigger"
                data-index={index}
                onClick={deleteFromFav}
                // className="btn-floating halfway waves-effect waves-light red"
              >
                Remove
              </button>

              {/* <!-- Modal Structure --> */}
              <div id={_id} className="modal">
                <div className="modal-content">
                  <form className="container" onSubmit={submit}>
                    <h3 className="black-text">Update Bar</h3>
                    <h5>{"Bar ID = " + _id}</h5>
                    <label>Name</label>
                    <input onChange={onChange} type="text" name="name" />
                    <label>Street</label>
                    <input onChange={onChange} type="text" name="street" />
                    <label>City</label>
                    <input onChange={onChange} type="text" name="city" />
                    <label>State</label>
                    <input onChange={onChange} type="text" name="state" />
                    <label>Zip</label>
                    <input onChange={onChange} type="text" name="zip" />
                    <label>Country</label>
                    <input onChange={onChange} type="text" name="country" />
                    <label>Phone</label>
                    <input onChange={onChange} type="text" name="phone" />
                    <label>Website URL</label>
                    <input onChange={onChange} type="text" name="url" />
                    <label>Overall Rating</label>
                    <input onChange={onChange} type="text" name="rating" />
                    <input type="submit" value="Update" />
                  </form>
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

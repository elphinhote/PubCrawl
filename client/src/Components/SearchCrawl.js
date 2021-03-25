import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import CrawlCard from "./CrawlCard";
import Map from "./Map";
import axios from "axios";
import M from "materialize-css";

const SearchCrawl = ({ item }) => {
  const [search, setSearch] = useState("");
  const [searchId, setSearchId] = useState(["", "", ""]);
  const [barArray, setbarArray] = useState([]);
  const [coordinateArray, setCoordinateArray] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const barIdChange = (e) => {
    const index = e.target.getAttribute("data-index");
    const arr = [...searchId];
    arr[index] = e.target.value;
    console.log(index, arr);
    setSearchId(arr);
  };

  const submitSearch = async (e) => {
    e.preventDefault();
    try {
      const searchRes = await axios.put(`/local_bars`, { search: search });
      setbarArray(searchRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var elems = document.querySelectorAll(".modal");
    M.FormSelect.init(elems, {});
    M.Modal.init(elems, {});
  }, []);

  function onClick() {
    axios({
      url: "/local_bars/coordinate",
      method: "POST",
      data: { idArray: searchId },
    })
      .then((res) => {
        console.log(res.data);
        setCoordinateArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="white">
      <nav className="nav-extended white">
        <div className="nav-wrapper white container">
          <form onSubmit={submitSearch}>
            <div className="input-field">
              <input id="search" type="search" onChange={onChange} required />
              <label className="label-icon" for="search">
                <i className="material-icons green-text text-lighten-4">
                  search
                </i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <label>First Stop</label>
      <select data-index={0} onChange={barIdChange} className="browser-default">
        <option value="" disabled selected>
          Choose your option
        </option>
        {barArray.map((item, index) => (
          <CrawlCard item={item} key={index} />
        ))}
      </select>
      <label>Second Stop</label>
      <select data-index={1} onChange={barIdChange} className="browser-default">
        <option value="" disabled selected>
          Choose your option
        </option>
        {barArray.map((item, index) => (
          <CrawlCard item={item} key={index} />
        ))}
      </select>
      <label>Third Stop</label>
      <select data-index={2} onChange={barIdChange} className="browser-default">
        <option value="" disabled selected>
          Choose your option
        </option>
        {barArray.map((item, index) => (
          <CrawlCard item={item} key={index} />
        ))}
      </select>

      {/* <!-- Modal Trigger --> */}
      {/* <a
        className="waves-effect waves-light btn modal-trigger grey lighten-1"
        href="#modal1"
      >
        Map
      </a>  */}

      <button onClick={onClick} data-target="modal1" class="btn modal-trigger">
        Map
      </button>
      {/* <!-- Modal Structure --> */}
      <div id="modal1" className="modal">
        <div className="modal-content">
          <Map coordinate={coordinateArray} />
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchCrawl;

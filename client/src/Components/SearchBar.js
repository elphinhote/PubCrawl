import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Cards from "./Cards";
import axios from "axios";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [barArray, setbarArray] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
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

  return (
    <div>
      <nav className="nav-extended white">
        <div className="nav-wrapper white container">
          <form onSubmit={submitSearch}>
            <div className="input-field">
              <input id="search" type="search" onChange={onChange} required />
              <label className="label-icon " htmlFor="search">
                <i className="material-icons green-text text-lighten-4">
                  search
                </i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <ul className="list-group container">
        {barArray.map((item, index) => (
          <Cards item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

import React, { useContext, useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { useHistory } from "react-router-dom";
import CardProfile from "../Components/CardProfile";
import UserContext from "../Context/UserContext";
import API from "../utils/API";

const Profile = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const [favArray, setFavArray] = useState([]);

  async function deleteFromFav(event) {
    event.preventDefault();
    const index = event.target.getAttribute("data-index");
    const _id = favArray[index]._id;
    const apiDeletedBar = await API.deleteBars(_id);
    const results = [...favArray];
    results.splice(index, 1);
    setFavArray(results);
  }

  useEffect(() => {
    (async () => {
      const favBars = await API.getBars();
      setFavArray(favBars.data);
    })();
  }, []);

  useEffect(() => {
    if (!userData.user);
  }, [userData.user, history]);

  const buttonStyleProfile = {
    backgroundColor: "#24a3a0",
    color: "#ffffff",
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s6 m4 l4">
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <img src="https://via.placeholder.com/150" />
                </div>
                <h3>{userData.user?.displayName}</h3>
              </div>
            </div>
          </div>
        </div>
        <h4>Favorite Bars</h4>
        <button className="btn modal-trigger">
          <a style={buttonStyleProfile} href="/addnewbar">
            New Bar
          </a>
        </button>

        <ul className="list-group container">
          {favArray.map((item, index) => (
            <CardProfile
              item={item}
              key={index}
              index={index}
              deleteFromFav={deleteFromFav}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

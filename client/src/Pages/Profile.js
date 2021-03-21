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
  
async function deleteFromFav (event){
    event.preventDefault();
    const index = event.target.getAttribute("data-index");
    const _id = favArray[index]._id
    const apiDeletedBar = await API.deleteBars(_id);
    const results = [...favArray]
    results.splice(index, 1)
    setFavArray(results)
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
                <h6>{userData.user?.displayName}</h6>
              </div>
            </div>
          </div>
        </div>
        <h4>favorites</h4>

        <ul className="list-group container">
          {favArray.map((item, index) => (
            <CardProfile item={item} key={index} index={index} deleteFromFav={deleteFromFav} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;

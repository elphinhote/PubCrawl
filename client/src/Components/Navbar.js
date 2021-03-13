import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import axios from "axios";

const Navbar = (props) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  }, []);

  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    } else {
      try {
        const userRes = await axios.get("/users", {
          headers: { "x-auth-token": token },
        });

        setUserData({ token, user: userRes.data });
      } catch (err) {
        console.log("User must login");
      }
    }
  };

  const logout = async () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
    console.log(logout, "success");
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Pub Crawl
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/profile">My Profile</a>
            </li>
            <li>
              <a href="/login" onClick={logout}>
                Log out
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/profile">My Profile</a>
        </li>
        <a href="/login" onClick={logout}>
          Log out
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
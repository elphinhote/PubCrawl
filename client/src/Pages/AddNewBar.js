import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

const AddNewBar = () => {
  const [addNewBarForm, setAddNewBarForm] = useState();
  const history = useHistory();

  const onChange = (e) => {
    setAddNewBarForm({ ...addNewBarForm, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUserAddedBar = await API.saveBar(addNewBarForm);
      history.push("/profile");
    } catch (err) {
      console.log("Couldn't save new Bar");
    }
  };
  const buttonStyleProfile = {
    backgroundColor: "#24a3a0",
    color: "#ffffff",
    marginRight: "20px",
  };
  return (
    <div>
      <form className="container" onSubmit={submit}>
        <h3 className="black-text">Add Bar</h3>
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
        <input style={buttonStyleProfile} type="submit" value="Save Bar" />
      </form>
    </div>
  );
};

export default AddNewBar;

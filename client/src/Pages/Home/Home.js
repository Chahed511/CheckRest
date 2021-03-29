import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleAdd } from "../../JS/actions/edit";
import { Button } from "react-bootstrap";

import "./Home.css";
//import background from "../../assets/image1.jpg"


const Home = () => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(toggleAdd());
  };
  return (
    <div className="home">
      <Link to="/add">
        <Button variant="primary" onClick={handleAdd}>
          ADD Contact
        </Button>
      </Link>
      <Link to="/">
        <Button variant="primary">
          Contact List</Button>
      </Link>
    </div>
  );
};

export default Home;

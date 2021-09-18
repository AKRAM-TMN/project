import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/rr.jpg";
import "../styles/Home.css";
import Addtask from '../components/Addtask';
import ListTask from '../components/ListTask';

import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 className="title"> welcome to our website </h1>
        <br/>
        <Link to="/menu">
          <button className="buy"> buy films </button>
        </Link> 
        <br/>
        <h2 className="films">write your best films : </h2>
        <Addtask/>
        <ListTask/>
      </div>
    </div>
  );
}

export default Home;

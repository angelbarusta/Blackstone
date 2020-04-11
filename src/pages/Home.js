import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import LogoImage from "../images/az-nuevo_circular.png";
import CartasAnnou from "../components/CartasAnnou";

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='container'>
          <div className='Home_row_uno'>
            <div className='Home__col '>
              <img src={LogoImage} alt='Logo' className='img-fluid mb-2' />
              <h1>Badge Management System</h1>
              <Link className='btn btn-primary' to='/badges'>
                Start
              </Link>
            </div>
            <CartasAnnou />
          </div>
        </div>
      </div>
    );
  }
}

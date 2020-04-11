import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import LandingImage from "../images/landing.png";
import LogoImage from "../images/az-nuevo_circular.png";
import CartasAnnou from "../components/CartasAnnou";
import { Card, Image } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='container'>
          <div className='Home_row_uno'>
            <Card className='Home__Landing'>
              <div className='Home__Landing_Container_Image'>
                <img src={LandingImage} className='Home__Landing_Image' />
              </div>
            </Card>
            <Card className='Home__Cart_Selection'>
              <CartasAnnou />
            </Card>
          </div>

          <div className='Home_row_dos'>
            <Card className='Home__Clientes'>
              <div className='Home__Clientes_Container'>
                <img
                  src={LogoImage}
                  className='Home__Clientes_Container_Image'
                />
              </div>
            </Card>
            <Card className='Home__Lista'>
              <div className='Home__Lista_Container'>
                <img src={LogoImage} className='Home__Lista_Container_Image' />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <h1>Badge Management System</h1>
              <Link className='btn btn-primary' to='/badges'>
                Start
              </Link> */
}

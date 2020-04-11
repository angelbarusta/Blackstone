import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import LogoImage from "../images/az-nuevo_circular.png";
import CartasAnnou from "../components/CartasAnnou";
import { Card } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='container'>
          <div className='Home_row_uno'>
            <Card style={{ width: "50%", margin: 10, padding: 10 }}>
              <CartasAnnou />
            </Card>
            <Card style={{ width: "50%", margin: 10, padding: 10 }}>
              <CartasAnnou />
            </Card>
          </div>

          <div className='Home_row_dos'>
            <Card style={{ width: "70%", margin: 10, padding: 10 }}>
              <CartasAnnou />
            </Card>
            <Card style={{ width: "30%", margin: 10, padding: 10 }}>
              <CartasAnnou />
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

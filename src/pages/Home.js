import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import LandingImage from "../images/landing.png";
import LogoImage from "../images/az-nuevo_circular.png";
import CartasAnnou from "../components/CartasAnnou";
import { Card, Image } from "semantic-ui-react";
import Clientes from "../components/Clientes";
import Tareas from "../components/Tareas";
import faker from "faker";

const autor = {
  name: faker.internet.userName(),
  frace: faker.lorem.slug(),
  date: faker.date.recent().toLocaleDateString(),
};
export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='container'>
          <div className='Home_row_uno'>
            <Card className='Home__Landing'>
              <div className='Home__Landing_Container_Image'>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start !important",
                    flexDirection: "column",
                    color: "white",
                  }}>
                  <h1>Mensaje del dia</h1>
                  <br />
                  <p style={{ fontSize: 25 }}>{autor.frace}</p>
                  <p style={{ fontSize: 15 }}>{autor.name}</p>
                  <p style={{ fontSize: 15 }}>{autor.date}</p>
                </div>
                {/* <img src={LandingImage} className='Home__Landing_Image' /> */}
              </div>
            </Card>
            <Card className='Home__Cart_Selection'>
              <CartasAnnou />
            </Card>
          </div>

          <div className='Home_row_dos'>
            <Card className='Home__Clientes'>
              <div className='Home__Clientes_Container'>
                <Clientes className='Home__Clientes_Container_Image' />
              </div>
            </Card>
            <Card className='Home__Lista'>
              <div className='Home__Lista_Container'>
                <Tareas className='Home__Lista_Container_Image' />
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

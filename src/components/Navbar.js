import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import faker from "faker";

import "./styles/Navbar.css";
import logo from "../images/az-nuevo_circular.png";

import gravatar from "./gravatar";
import { Icon } from "semantic-ui-react";

export const Navbar = (props) => {
  // this.props.avatarUrl
  const { myList } = props;
  let email_random = faker.internet.exampleEmail();
  return (
    <div className='Navbar'>
      <Link className='Navbar__brand' to='/'>
        <img
          className='Navbar__brand-logo'
          src={logo}
          alt='Logo'
          width={30}
          height={30}
        />
        <span className='font-weight-light'>Blackstone</span>
        <span className='font-weight-bold'>App</span>
      </Link>

      {myList.length > 2 ? (
        <Link className='Navbar__brand' to='/account'>
          <img
            className='Navbar__brand-user'
            src={myList[myList.length - 1].avatarUrl}
            alt='user'
          />
        </Link>
      ) : (
        <Link className='Navbar__brand-user' to='/account'>
          <Icon name='user' circular size='large' style={{ color: "white" }} />
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
  };
};

export default connect(mapStateToProps, null)(Navbar);

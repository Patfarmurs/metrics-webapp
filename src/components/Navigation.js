import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TiMicrophone } from 'react-icons/ti';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';

function Navigation() {
  return (
    <div className="navbar">
      <ul>
        <li className="back">
          <NavLink to="/">
            <IoIosArrowBack />
          </NavLink>
        </li>
      </ul>
      <div className="logo">
        <div className="wrapper">
          <div className="bg"> Hogwarts characters </div>
          <div className="fg"> Hogwarts characters </div>
        </div>
      </div>
      <div>
        <div className="setting">
          <TiMicrophone />
          <IoMdSettings />
        </div>
      </div>
    </div>
  );
}

export default Navigation;

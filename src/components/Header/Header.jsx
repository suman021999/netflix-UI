import React from 'react'
import '../../App.scss';
import logo from"../../logo.png"
import { Link } from 'react-router-dom';
import {RiSearchLine} from "react-icons/ri/index"

const Header = () => {
  return (
    <>
      <nav className="header">
        <img src={logo} alt="logo" />

        <div>
          <Link to="/tvshow">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tvshow">tv shows</Link>
          <Link to="/recent">Recent</Link>
          <Link to="/mylist">My List</Link>
        </div>

        <RiSearchLine/>
      </nav>
    </>
  )
}

export default Header

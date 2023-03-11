import React from 'react'
import ubuntuImg from '../../assets/images/ubuntu-distro.png'
import { Link } from 'react-router-dom'
import { BiUser } from "react-icons/bi"

export default function Lock() {
  return (
    <div id="lock-page">
      <div>
        <Link to="/" className="lock-user-screen-listing">
          <BiUser className="user-icon"/>
          <p>Guest</p>
        </Link>
      </div>
      <img src={ubuntuImg} alt="ubuntu" className="distro" />
    </div>
  )
}

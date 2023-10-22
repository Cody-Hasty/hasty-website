import React from 'react'
import ubuntuImg from '@images/ubuntu-distro.png'
import Link from '@/utils/Link'
import { BiUser } from "react-icons/bi"
import Image from 'next/image'

export default function Lock() {
  return (
    <div id="lock-page">
      <div>
        <Link to="/" className="lock-user-screen-listing">
          <BiUser className="user-icon" />
          <p>Guest</p>
        </Link>
      </div>
      <Image src={ubuntuImg} alt="ubuntu" className="distro" width={250} height={56.25} />
    </div>
  )
}

import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to = '/'>HOME </Link>
      <Link to = '/videos'>VIDEOS</Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import s from "./design.module.css"
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div id={s.nav} >
          <Link to="/" >Create</Link>
          <Link  to="/details" >Details</Link>
    </div>
  )
}

export default Nav
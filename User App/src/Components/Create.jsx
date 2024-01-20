import axios from 'axios';
import React, { useState } from 'react'
import s from "./design.module.css"
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {
  const [name, setName] = useState("");
  const [sal, setSal] = useState("");
  const [company, setCompany] = useState("");

  let changeName = (e) => {
    setName(e.target.value)
  }
  let changeSal = (e) => {
    setSal(e.target.value)
  }
  let changeCompany = (e) => {
    setCompany(e.target.value)
  }

  let navi = useNavigate()

  let submit = (e) => {
    let obj = {
      eName: name,
      eSal: sal,
      eCompany: company
    }
    axios.post('http://localhost:3000/details', obj)
    e.preventDefault()
    navi("/details")
  }

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: "18vh", color: "white"}}>CREATE</h1>
      <div id={s.boxSize}>
        <div id={s.box}>
          <form action="">
            <input type="text" placeholder='Name' value={name} onChange={changeName} /><br />
            <input type="text" placeholder='sal' value={sal} onChange={changeSal} /><br />
            <input type="text" placeholder='Company' value={company} onChange={changeCompany} /><br />
            <Link to="/details"><button onClick={submit}>Submit</button></Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
import axios from 'axios';
import s from "./design.module.css"
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

     const [name, setName] = useState("");
     const [sal, setSal] = useState("");
     const [company, setCompany] = useState("");


     let url = useParams();
     useEffect(() => {
          axios.get(`http://localhost:3000/details/${url.id}`)
               .then((resp) => {
                    console.log(resp.data);
                    setName(resp.data.eName)
                    setSal(resp.data.eSal)
                    setCompany(resp.data.eCompany)
               })
     }, [])

     let navi = useNavigate()


     let changeName = (e) => {
          setName(e.target.value)
     }
     let changeSal = (e) => {
          setSal(e.target.value)
     }
     let changeCompany = (e) => {
          setCompany(e.target.value)
     }

     let submit = (e) => {
          let obj = {
               eName: name,
               eSal: sal,
               eCompany: company
          }
          axios.put(`http://localhost:3000/details/${url.id}`, obj)
          navi('/details')
     }

     return (
          <div>
               <h1 style={{
                    display: "flex", justifyContent: "center", marginTop: "18vh", color: "white" }}>UPDATE</h1>
                         < div id={ s.boxSize } >
                         <div id={s.box}>
                              <form action="">
                                   <input type="text" placeholder='Name' value={name} onChange={changeName} /><br />
                                   <input type="text" placeholder='sal' value={sal} onChange={changeSal} /><br />
                                   <input type="text" placeholder='Company' value={company} onChange={changeCompany} /><br />
                                   <Link to='/details'><button onClick={() => { submit() }}>Update</button></Link>
                              </form>
                         </div>
               </div>
          </div >
     )
}

export default Edit
import axios from 'axios'
import s from "./design.module.css"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Details = () => {

     const [details, setDetails] = useState([])

     useEffect(() => {

          axios.get('http://localhost:3000/details')
               .then((resp) => {
                    setDetails(resp.data)
               })
               .catch(() => {
                    console.log("error");
               })
     }, [])

     let deleting = (id) => {
          axios.delete(`http://localhost:3000/details/${id}`)
          window.location.assign('/details')
     }


     return (
          <div>
               <div className={s.box} >
                    {
                         details.map((data) => {
                              return (
                                   <div className={s.boxs} key={data.id} >
                                        <h1>Name:{data.eName}</h1>
                                        <h1>Salary:{data.eSal}</h1>
                                        <h1>Comp:{data.eCompany}</h1>
                                        <div>
                                             {/* <Link to={`/edit/${data.id}`}><button >update</button></Link> */}
                                             <button ><Link to={`/edit/${data.id}`}>Update</Link></button>
                                             <button onClick={()=>{deleting(data.id)}}>Delete</button>
                                        </div>
                                   </div>
                              )
                         })
                    }
               </div>
          </div>
     )
}

export default Details
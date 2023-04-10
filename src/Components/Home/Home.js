import React from 'react'
import "./Home.css";
import { Dashboard } from '../Dashboard/Dashboard';
import  Mail from "./image/secure-email-hosting-desk.png"
import { useHistory } from 'react-router-dom';



export const Home = () => {
    const history = useHistory();




  return (
    <Dashboard    >
    <div className="Home">
      <div className="h-left">
<div className="content">

    <span>
        Create And Send Bulk Emails To your Contacts  </span>
        <span>
            With Bulk Email Tool, Your Marketing Job becomes very Easier, 
            Add a Client and Sent Mail To all your Contacts Without any Hardwork
        </span>
        <button className='button' onClick={()=>{history.push("/Adduser")}}>Get Started</button>
</div>
      </div>
      <div className="h-right">
<img src = {Mail} alt ="mail"/>
      </div>

    </div>
    </Dashboard>
  )


}



import React from 'react'
import { useHistory } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dashboard';
import "./Nopage.css";
const Nopage = () => {
    const history = useHistory();

    return(
      <Dashboard title="You are out of our Website"
      description="please click the below button to redirect to home">
        <div className='Nopage'>
        <button className='button' onClick={()=>{history.push("/Home")}}>Home</button>
        </div>
       
      </Dashboard>
    )
}

export default Nopage

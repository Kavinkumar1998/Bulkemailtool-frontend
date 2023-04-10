import React from 'react'
import { useParams } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dashboard';
import "./veiwmail.css"
import withAuthorization from '../../Autherization';


const Veiwmail = ({Mail}) => {
  const {Id} = useParams();
  const Maildata = Mail.find(obj=>obj._id === Id);
  console.log(Maildata);
  return (
    <Dashboard title="Mail-Details">
 <div className="container">

        <h2>Name: {Maildata.name}</h2>
        <p> Email: {Maildata.email} </p>
        <p>Subject : {Maildata.subject} years </p>
        <p>Message : {Maildata.message} </p>
        <p>Date: {Maildata.Date}</p>
      </div>
    </Dashboard>
  )
}
export default withAuthorization(Veiwmail)

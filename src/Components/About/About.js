import React from 'react'
import { Dashboard } from '../Dashboard/Dashboard'
import "./About.css";
const About = () => {
  return (
    <Dashboard title = "About Us">
 <div className="Main">
      <h2>
        Welcome to Bulk Mail app, We make your Mailing job easier and more efficient.
        This tool helps you to Contact your Clients with Ease.here You can reveiw your Sent Mails.
        You can Add and Edit Client Details With ease.Simultaneously you can Send Multiple Emails With One Click.
      </h2>
      <h4>contact Us</h4>
        <h3>
          Email : <label>kavinajith412@gmail.com</label>
        </h3>
      </div>
    </Dashboard>
   
  )
}

export default About

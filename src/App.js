import './App.css';
import  Forgetpassword  from './Components/Forgetpassword/Forgetpassword';
import { Login } from './Components/Login.js/Login';
import {Signup} from"./Components/Signup/Signup.js";
import { Route} from "react-router-dom";
import { VerifyOTP } from './Components/Verifyotp/Verifyotp';
import { Setpassword } from './Components/Setpassword/Setpassword';
import { Dashboard } from './Components/Dashboard/Dashboard';
import  Edituser  from './Components/Edituser/Edituser';
import { useState } from 'react';
import { useEffect } from 'react';
import Userdashboard from './Components/Userdashboard/Userdashboard';
import  Sendmail  from './Components/Sendmail/Sendmail';
import  Sentmail  from './Components/Sentmails/Sentmails';
import  Veiwmail  from './Components/Veiwmail/veiwmail';
import About from './Components/About/About';
import Charts from './Components/Charts/Charts';
import Profile  from './Components/Profile/Profile';
import Home from './Components/Home/Home';
import Adduser from './Components/Adduser/Adduser';
import Nopage from './Components/Nopage/Nopage';



function App() {

const[User,setUser]=useState([]);
const [Mail,setMail]=useState([]);

const[count,setcount]=useState();


useEffect(() =>{
 const getcount = async() =>{
   try{
     const response = await fetch(`https://bulkemailtooltsr.onrender.com/sentmails/count`,{
       method:"GET",
       headers: {
         "x-auth-token": localStorage.getItem("token"),
        "Content-Type":"application/json"
       },
      });
     const data= await response.json();
     setcount(data);
   }
   catch(error){
console.log(error);
   }
 };
 getcount();

},[]);

useEffect(() =>{
  const getUser = async() =>{
    try{
      const response= await fetch("https://bulkemailtooltsr.onrender.com/users",{
        method : "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data= await response.json();
      setUser(data);
    }
    catch(error){
console.log(error);
    }
  };
  getUser();

},[])


useEffect(() =>{
  const getMail = async() =>{
    try{
      const response= await fetch("https://bulkemailtooltsr.onrender.com/sentmails",{
        method : "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      const data= await response.json();
      setMail(data);
    }
    catch(error){
console.log(error);
    }
  };
  getMail();

},[])
  return (
    <div className="App">

<Route  exact path = "/">
     <Login/>
      </Route>

      <Route path="/Signup">
  <Signup/>
      </Route>
   
      <Route path="/Forgetpassword">
     <Forgetpassword/>
      </Route>
      <Route path="/Verifyotp">
     <VerifyOTP/>
      </Route>

      <Route path="/Setpassword">
     <Setpassword/>
      </Route>

      <Route path="/Dashboard">
     <Dashboard/>
      </Route>

      <Route path="/Home">
     <Home/>
      </Route>
      
      <Route path="/Adduser">
     <Adduser  User={User}
       setUser={setUser}/>
      </Route>
  
      <Route path="/Edituser/:Id">
     <Edituser  User={User}
       setUser={setUser}/>
      </Route>


      <Route path="/Userdashboard">
     <Userdashboard  User={User}
       setUser={setUser}/>
      </Route>

      <Route path="/Sendmail">
     <Sendmail Mail={Mail}
       setMail={setMail}/>
      </Route>

      <Route path="/Sentmail">
     <Sentmail Mail={Mail}
       setMail={setMail}/>
      </Route>


      <Route path="/Veiwmail/:Id">
     <Veiwmail Mail={Mail}/>
      </Route>


      <Route path="/Charts">
  <Charts/>
</Route>


<Route path="/About">
  <About/>
</Route>

 
<Route path="/Profile">
  <Profile
  count={count}
  setcount={setcount}/>
</Route>


<Route path = "/no">
       <Nopage/>
     </Route>

    </div>
  );
}

export default App;

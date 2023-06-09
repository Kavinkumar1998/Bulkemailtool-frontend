import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import "./Userdashboard.css";
import { useHistory } from 'react-router-dom'
import { Dashboard } from '../Dashboard/Dashboard';
import withAuthorization from '../../Autherization';


const Userdashboard = ({User,setUser}) => {

    const history= useHistory();
console.log(User);


 //function for deleting data
 const deletedata= async (Id)=>{
  try{
  const response = await fetch(`https://bulkemailtooltsr.onrender.com/delete/${Id}`,{
    method:"DELETE",
    headers: {
      "x-auth-token": localStorage.getItem("token"),
     "Content-Type":"application/json"
    },
   });
const data = await response.json();
console.log(data);
    const removeUser = User.filter((User)=>User._id !== Id);
    setUser(removeUser);
  }catch(error){
    console.log(error);
      } 
  
  
  };
  return (
 <Dashboard   title = "Client details"
>
<div className="card-container"> 
              {User.map((User)=>(
                       <Card sx={{ maxWidth: 345 }} key ={User._id} className="card">
                       <CardContent className="card-comp">
  
                         <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}}  gutterBottom variant="h5" component="div">
                         First Name : {User.name}
                         </Typography>

                         <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}}  variant="body1" color="black">
                         email : {User.email}
                         </Typography>
  
                    
  
                       </CardContent>
                       <CardActions className="Cardactions">
                       <Button sx={{fontFamily:"cursive",fontWeight:"Bold"}}  onClick={()=>history.push(`/Edituser/${User._id}`)} variant="contained" color="secondary">EDIT</Button>
                       <Button  sx={{fontFamily:"cursive",fontWeight:"Bold"}}  onClick={()=>deletedata(User._id)}  variant="contained" color="error">DELETE</Button>

                       </CardActions>
                     </Card>
              ))}
        </div>
 </Dashboard>
  
  
  
  )
}

export default withAuthorization(Userdashboard);
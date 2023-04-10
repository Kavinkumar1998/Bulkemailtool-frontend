import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import "./Sentmails.css";
import { useHistory } from 'react-router-dom'
import { Dashboard } from '../Dashboard/Dashboard';
import withAuthorization from '../../Autherization';


const Sentmail = ({Mail,setMail}) => {

    const history= useHistory();
console.log(Mail);

  return (
 <Dashboard title = "Sent Mail details">

<div className="card-container"> 
              {Mail.map((Mail)=>(
                       <Card sx={{ maxWidth: 345 }} key ={Mail._id} className="card">
                       <CardContent className="card-comp">
  
                         <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}} gutterBottom variant="h5" component="div">
                         Name : {Mail.name}
                         </Typography>

                         <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}} variant="body1" color="black">
                         Email : {Mail.email}
                         </Typography>

                         <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}} variant="body1" color="black">
                         Subject: {Mail.subject}
                         </Typography>

                       <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}} variant="body1" color="black">
                        Message : {Mail.message}
                         </Typography>
                         
                         <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}} variant="body1" color="black">
                        Date : {Mail.Date}
                         </Typography>
  
                       </CardContent>
                       <CardActions className="Cardactions">
                       <Button sx={{fontFamily:"cursive",fontWeight:"Bold"}} onClick={()=>history.push(`/Veiwmail/${Mail._id}`)} variant="contained" color="secondary">Veiw Mail</Button>


                       </CardActions>
                     </Card>
              ))}
        </div>
 </Dashboard>
  
  
  
  )
}

export default withAuthorization(Sentmail);

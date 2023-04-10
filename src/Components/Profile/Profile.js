import { Dashboard } from '../Dashboard/Dashboard'
import { IconButton, Typography } from '@mui/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./Profile.css";
export  const Profile = ({count,setcount}) => {

  return (
    <Dashboard title="Profile">

<div className="Profile">
<IconButton color="inherit">
            <AccountCircleRoundedIcon sx={{fontSize:60}} /> 

            </IconButton>
      <Typography   component="h1"  variant="h6">Name: {localStorage.getItem('Name')}</Typography>
      <Typography   component="h1"  variant="h6">Email: {localStorage.getItem('Email')}</Typography>
      <Typography   component="h1"  variant="h6">No.Of.Mails Sent : {count} </Typography>
      </div>
        </Dashboard>
  )
}



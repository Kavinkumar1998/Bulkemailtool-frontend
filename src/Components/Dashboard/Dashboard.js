import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';


import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Dashboard.css"
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" target='blank' href=" https://kavinkumar-portfolio.netlify.app/">
     KavinKumar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const drawerWidth = 240;




const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

    export const Dashboard =({title,description,children})=> {
      const history = useHistory();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  
const logout= ()=>{
  localStorage.clear();
  history.push("/")

}
  return (
    <ThemeProvider  theme={mdTheme}>
      <Box  sx={{ display: 'flex',
      }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              backgroundColor: 'rgb(130, 15, 201)'
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 ,fontFamily:"cursive",fontWeight:"Bold"}}
            >
            BULK EMAIL TOOL
            </Typography>
            <IconButton color="inherit" onClick={()=>{ history.push("/Profile")}}>
            <AccountCircleRoundedIcon sx={{fontSize:35}} /> 

            </IconButton>
             <IconButton color="inherit" onClick={()=>logout()}>
           <LogoutRoundedIcon sx={{fontSize:30}} /> 
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer className="drawer" variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1,color:"rgb(130, 15, 201)",
              fontFamily:"cursive",fontWeight:"Bold" }}
            >
              Dashboard
            </Typography>
            </IconButton>
          </Toolbar>
          <Divider />
          
          <IconButton onClick={()=>{ history.push("/Home")}}>
          <HomeRoundedIcon sx={{fontSize:25,color:"rgb(130, 15, 201)",}}  />
          <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 ,color:"rgb(130, 15, 201)", fontFamily:"cursive",fontWeight:"Bold",
               ...(!open && { display: 'none' })}}>
             Home
            </Typography>
           
            </IconButton>


            <IconButton onClick={()=>{ history.push("/Adduser")}}>
                <PersonAddAltRoundedIcon sx={{fontSize:25,color:"rgb(130, 15, 201)"}} />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 ,color:"rgb(130, 15, 201)",fontFamily:"cursive",fontWeight:"Bold",
                ...(!open && { display: 'none' })}}
            >
             AddUsers
            </Typography>
            </IconButton>


            <IconButton onClick={()=>{ history.push("/Sendmail")}}>
            <EmailRoundedIcon sx={{fontSize:25,color:"rgb(130, 15, 201)"}}/>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 ,color:"rgb(130, 15, 201)",fontFamily:"cursive",fontWeight:"Bold",
                ...(!open && { display: 'none' })}}
            >
              Send Mails
            </Typography>
            </IconButton>


            <IconButton onClick={()=>{ history.push("/Userdashboard")}}>
                <DashboardCustomizeRoundedIcon sx={{fontSize:25,color:"rgb(130, 15, 201)"}}/>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1,color:"rgb(130, 15, 201)",fontFamily:"cursive",fontWeight:"Bold",
                ...(!open && { display: 'none' }) }}
            >
           Users Dashboard
            </Typography>
            </IconButton>
            
            <Divider sx={{ my: 1 }} />

            <IconButton onClick={()=>{history.push("/Sentmail")}}>
                < MarkEmailReadRoundedIcon sx={{fontSize:25,color:"rgb(130, 15, 201)"}} />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 ,color:"rgb(130, 15, 201)",fontFamily:"cursive",fontWeight:"Bold",
                ...(!open && { display: 'none' })}}
            >
             Sent Mails
            </Typography>
            </IconButton>


            <IconButton onClick={()=>{history.push("/Charts")}}>
                <AddchartRoundedIcon sx={{fontSize:25,color:"rgb(130, 15, 201)"}}/>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 ,color:"rgb(130, 15, 201)",fontFamily:"cursive",fontWeight:"Bold",
                ...(!open && { display: 'none' })}}
            >
           Chart
            </Typography>
            </IconButton>

            <IconButton onClick={()=>{history.push("/About")}}>
                < InfoRoundedIcon sx={{fontSize:25,color:"rgb(130, 15, 201)"}}/>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 ,color:"rgb(130, 15, 201)",fontFamily:"cursive",fontWeight:"Bold",
                ...(!open && { display: 'none' })}}
            >
            About Us
            </Typography>
            </IconButton>
            
    
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',  backgroundColor:" rgb(195, 179, 253)"
          }}
        >
          <Toolbar />
          <div className="main-component">
           <header>
               <h1 className ="heading">{title}</h1>
           </header>
           <main className="main-segment">
               <h2>{description}</h2>
               <div className="child-segment">
                   {children}
               </div>
           </main>
       </div>
        </Box>
      </Box>
  
      <Copyright sx={{ pt: 4 }} />
    </ThemeProvider>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./Adduser.css";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Dashboard } from '../Dashboard/Dashboard';
import withAuthorization from '../../Autherization';




const formValidationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().email().required("Email address is required"),
});


const Adduser =({User,setUser})=>{
    const history = useHistory();
    const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
      useFormik({
        initialValues: {
          name: "",
          email: "",
        },
        validationSchema: formValidationSchema,
        onSubmit: async (values) => {
          const data = await fetch(`https://bulkemailtooltsr.onrender.com/adduser`, {
            method: "POST",
            headers: { 
                "x-auth-token": localStorage.getItem("token"),
                "content-type": "application/json" },
            body: JSON.stringify(values),
          })
          const result = await data.json();
          if (data.status === 400) {
           console.log(result)
          } else {

            setUser([...User,result]);
            history.push("/Userdashboard");
            history.go(0)
            console.log(result)
          }
           
        },
      });


  return (
<Dashboard>

<div className="a-main">
<div className="a-left">
<div className="content">

<span>Create Contacts Here</span>
    <span>
      Add Clients User Name and their Email Address
    </span>
    <button className='button' onClick={()=>{history.push("/Userdashboard")}}>Dashboard</button>
</div>
</div>
<div className="a-right">

<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="main-box"  >
          <Typography     sx={{fontFamily:"cursive",fontWeight:"Bold"}}  component="h1" variant="h5"> Add Client Details </Typography>
           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  value={values.name}
                  autoComplete="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && errors.name}
                  helperText={touched.name && errors.name ? errors.name : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email ? errors.email : null}
                  
                />
              </Grid>
            </Grid>
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , fontFamily:"cursive",fontWeight:"Bold"}}
            >
             Add Client
            </Button>
          </Box>
        </Box>

      </Container>
</div>
    </div>
</Dashboard>
      
  );
}

export default withAuthorization(Adduser);
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./Forgetpassword.css";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useState } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href=" https://kavinkumar-portfolio.netlify.app/">
     KavinKumar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const formValidationSchema = yup.object({
  Email: yup.string().email().required("Email address is required"),
 
});


const Forgetpassword =()=>{
    const history = useHistory();
    const   [open,setopen]=useState(false);
    const    [message,setmessage]=useState([]);

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
      useFormik({
        initialValues: {
          Email: ""
         
        },
        validationSchema: formValidationSchema,
        onSubmit: async (values) => {
          const data = await fetch(`https://bulkemailtooltsr.onrender.com/forgetpassword`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(values),
          })
          const result = await data.json();
          if (data.status === 400) {
            setopen(!open)
               setmessage(result.message);
            console.log(result);
          } else {
         console.log(result);
         history.push("/VerifyOTP");
          }
          
        },
      });

  return (
  <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="main-box"  >
          <Typography  sx={{fontFamily:"cursive"}}component="h1" variant="h4">Account Recovery</Typography>
          <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}} component="h1" variant="h6">Forget Password</Typography>
           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}}component="h1" variant="h6">Enter an email address where we can send you a verification code</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email Address"
                  name="Email"
                  autoComplete="Email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Email && errors.Email}
                  helperText={touched.Email && errors.Email ? errors.Email : null}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2  ,fontFamily:"cursive",fontWeight:"Bold"}}
            >
              Send OTP
            </Button>
            <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold",color:"red",
          ...(!open && { display: 'none' })
          }} component="h1" variant="h5">{message}</Typography>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />

 
      </Container>
      
  );
}

export default Forgetpassword;
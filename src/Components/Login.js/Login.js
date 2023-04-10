import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./Login.css";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useState } from 'react';
import { Checkbox } from '@mui/material';


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
  Password: yup.string().required("password required").min(8),
});


export const Login =()=>{
    const history = useHistory();
    const [show, setShow] = useState(false);
    const   [open,setopen]=useState(false);
    const    [message,setmessage]=useState([]);

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
      useFormik({
        initialValues: {
          Email: "",
          Password: "",
        },
        validationSchema: formValidationSchema,
        onSubmit: async (values) => {
         const data = await fetch(`https://bulkemailtooltsr.onrender.com/Login`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(values),
          })
          const result = await data.json();
          console.log(result);
            if (data.status === 400) {
              setopen(!open)
               setmessage(result.message);
          console.log(result);

            } else {
             ;
              localStorage.setItem("token", result.token);
              localStorage.setItem("Name", result.Name);
              localStorage.setItem("Email", result.Email);
              history.push("/Home");
           
            }
              

        },
      });


      const togglePassword = () => {
        setShow(!show);
      };
  
    const reDirect = () => {
      history.push("/Signup")
    };

  return (
   

  <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="main-box" >
          <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}} component="h1" variant="h5">  Sign In your Account   </Typography>
           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type={show ? "text" : "Password"}
                  id="password"
                  autoComplete="Password"
                  value={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Password && errors.Password}
                  helperText={touched.Password && errors.Password ? errors.Password : null}
                />
              </Grid>
              <span className="showpassword">
                  <Checkbox
                    onClick={togglePassword}
                    aria-label="Checkbox demo"
                  />
                  <span>Show password</span>
                </span>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontFamily:"cursive",fontWeight:"Bold" }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link  sx={{fontFamily:"cursive",fontWeight:"Bold"}} onClick={() => history.push("/Forgetpassword")} variant="body2">
                  Forget Password
                </Link>
              </Grid>
            </Grid>
            <Button
               onClick={() => reDirect()}
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 2, mb: 2 ,fontFamily:"cursive",fontWeight:"Bold"}}
            >
              Create Account
            </Button>
            <Typography 
             sx={{fontFamily:"cursive",fontWeight:"Bold",color:"red",
          ...(!open && { display: 'none' })}} 
          component="h1"
           variant="h5">{message}</Typography>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />

      </Container>
      
  );
}
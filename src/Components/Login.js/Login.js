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
import { Backdrop, Checkbox, CircularProgress, Snackbar } from '@mui/material';
import { useState } from 'react';
import MuiAlert from "@mui/material/Alert";


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



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const formValidationSchema = yup.object({
  Email: yup.string().email().required("Email address is required"),
  Password: yup.string().required("password required").min(8),
});


export const Login =()=>{
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);
  const [severity, setSeverity] = useState(true);



  const handleCloseDrop = () => {
    setDrop(false);
  };
  

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };





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
              setOpen(true);
              handleCloseDrop();
            } else {
              setOpen(true);
              setSeverity(false);
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
          <Typography component="h1" variant="h5">  Sign In your Account   </Typography>
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
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => history.push("/Forgetpassword")} variant="body2">
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
              sx={{ mt: 2, mb: 2 }}
            >
              Create Account
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
              onClose={handleClose}
              severity={severity ? "error" : "success"}
              sx={{ width: "100%" }}
            >
              {severity ? "Invalid credentials" : "login successfully"}
            </Alert>
          </Snackbar>
          <div>
          <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={drop}
        onClick={handleCloseDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        </div>
      </Container>



      
  );
}
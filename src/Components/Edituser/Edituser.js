import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./Edituser.css";
import { useFormik } from "formik";
import { useHistory, useParams} from "react-router-dom";
import * as yup from "yup";
import { Dashboard } from '../Dashboard/Dashboard';
import { useState } from 'react';
import { useEffect } from 'react';




const formValidationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().email().required("Email address is required"),
});


export const Edituser =({User,setUser})=>{
    const history = useHistory();
    const {Id} = useParams();
    console.log(Id);
    const userdata = User.find(obj=>obj._id === Id);
    console.log(userdata);
    const[editId,seteditId]= useState("");
    const[name,setname]= useState("");
    const[email,setemail]= useState("");

    useEffect(() => {
      seteditId(userdata._id);
      setname(userdata.name);
      setemail(userdata.email);

    },[])

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
      useFormik({
        initialValues: {
          name:userdata.name,
          email:userdata.email,
        },
        validationSchema: formValidationSchema,
        onSubmit: async (values) => {
          const data = await fetch(`https://bulkemailtooltsr.onrender.com/edituser/${Id}`, {
            method: "PUT",
            headers: { 
                "x-auth-token": localStorage.getItem("token"),
                "content-type": "application/json" },
            body: JSON.stringify(values),
          })
          const result = await data.json();
          console.log(result);
         

          if (data.status === 400) {
           console.log(result)
          } else {
            const editstud= User.findIndex((stud)=>stud.id===editId)

            User[editstud]=(values);
            setUser([...User]);
            setname("")
            setemail("")
            history.push("/Userdashboard");
            history.go(0)
            console.log("saved")
          }
           
        },
      });


  return (
<Dashboard>

<div className="e-main">
<div className="e-left">
<div className="content">

<span>Edit Contacts Here</span>
    <span>
      Edit Clients User Name and their Email Address
    </span>
</div>
</div>
<div className="e-right">

<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="main-box"  >
          <Typography component="h1" variant="h5"> Edit Client Details </Typography>
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
              sx={{ mt: 3, mb: 2 }}
            >
             Edit Client
            </Button>
          </Box>
        </Box>

      </Container>
</div>
    </div>
</Dashboard>
      
  );
}
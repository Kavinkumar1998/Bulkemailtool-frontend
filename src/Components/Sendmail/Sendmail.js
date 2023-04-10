import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./Sendmail.css";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Dashboard } from '../Dashboard/Dashboard';
import withAuthorization from '../../Autherization';




const formValidationSchema = yup.object({
   subject: yup.string().required(" Subject is required"),
   message: yup.string().required(" Message is required"),
});


const Sendmail =({Mail,setMail})=>{
    const history = useHistory();
    const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
      useFormik({
        initialValues: {
          subject: "",
          message: "",
        },
        validationSchema: formValidationSchema,
        onSubmit: async (values) => {
          const data = await fetch(`https://bulkemailtooltsr.onrender.com/sendMail`, {
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

            setMail([...Mail,result]);
            history.push("/");
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

<span>Send Bulk Mail Here</span>
    <span>
      Add Subject and Message for Mail.you can add marketting message for you clients
    </span>
</div>
</div>
<div className="a-right">

<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="main-box"  >
          <Typography  sx={{fontFamily:"cursive",fontWeight:"Bold"}} component="h1" variant="h5"> Add Subject And Message </Typography>
           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  value={values.subject}
                  autoComplete="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.subject && errors.subject}
                  helperText={touched.subject && errors.subject ? errors.subject : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="message"
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  autoComplete="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message && errors.message}
                  helperText={touched.message && errors.message ? errors.message : null}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,fontFamily:"cursive",fontWeight:"Bold"}}
            >
             Send Mail
            </Button>
          </Box>
        </Box>

      </Container>
</div>
    </div>
</Dashboard>
      
  );
}

export default withAuthorization(Sendmail)
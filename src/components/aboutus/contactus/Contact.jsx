import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Typography } from '@mui/material';




export const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qoyy6t9', 'template_fcqupmd', form.current, 'user_aKYCVemuItfZhNHFyAuxt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const pop=(number)=>{
    prompt(number);
  }
  return (
    <div className="top" style={{padding:"10% 30% auto 30%",alignItems:"center",marginTop:"10%"}}>
      <form ref={form} onSubmit={sendEmail} >
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop:'20px'
      }}
    >
      <Typography color="inherit">
        Contact-US
      </Typography>
      <TextField fullWidth label="First-Name" id="fullWidth" />
      <TextField fullWidth label="Last-Name" id="fullWidth" />
      <TextField fullWidth label="Email-ID" id="fullWidth" />
      <TextField fullWidth label="Your-Message" id="fullWidth" />
      
    </Box>
    </form>
    </div>
  );
};


import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
      <div style={{marginTop:"50px" }}>
        <Typography variant='h5'color={"brown"}><h1>Registraion Form</h1></Typography> <br/><br/>
        <TextField label="enetr your name" variant='outlined'/><br/><br/>
        <TextField label="enetr your id" variant='outlined'/><br/><br/>
        <TextField label="enter your email-id" variant='outlined'/><br/>  <br/>
        <TextField label="enter your password" variant='outlined'/><br/><br/>
        <Button variant='contained' color='success'>register</Button>
        
      
      </div>
  )
}

export default Registration
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"50px" }}>
        <Typography variant="h2" color={"brown"}>login form</Typography><br/><br/>
        <TextField label='enter name' variant='outlined'/><br/> <br/>
        <TextField label='password' type='password' variant='outlined'/><br/><br/>
        <Button variant='contained' color='success'>submit</Button>

        
    </div>

  )
}

export default Login
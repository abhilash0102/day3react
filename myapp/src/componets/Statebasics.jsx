import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var name1="abhilash"
    var [name,setName]= useState ()
    var[value,setValue]=useState()
    const changeName = () => {
        console.log("clicked")
        setName(value)
    }
    const inputHandler = (e) => {
      console.log(e.target.value)
      setValue(e.target.value)
    }
  return (
    <div><Typography variant='h3'>welcome {name} </Typography>
    <TextField label="enter name"variant='outlined' onChange={inputHandler}/><br/>
    <Button variant='contained'color='success' onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebasics
import { Button, Typography } from '@mui/material'
import { brown } from '@mui/material/colors'
import React, { useState } from 'react'

const Counter = () => {
    
    var [value,setCount]= useState(0)

    const pC = () => {
        console.log("clicked")
        setCount(value+1)
    }
   
    const mC = () => {
        console.log("clicked")
        if(value>0){
        setCount(value-1)
        }
    }
  return (
    <div>
        <Typography variant='h3' color={'brown'}>count :{value}</Typography>
        <Button variant='contained' color='error' onClick={mC}>-</Button>&nbsp;&nbsp;
        <Button variant='contained' color='success' onClick={pC}>+</Button>

    </div>
  )
}

export default Counter
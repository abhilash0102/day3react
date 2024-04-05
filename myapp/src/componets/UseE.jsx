import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [hb,setHb]=useState()
    const cN = ()  =>{
        setHb("home")
    }
    const gN = ()  =>{
        setHb("galary")
    }
    const coN = ()  =>{
        setHb("contact")
      
    }
    useEffect(()=>{
        gN()
    },[])
  return (
    <div>
        <Typography variant='h3' color={'brown'}>welcom  {hb}</Typography>
         <Button variant='contained' color='success' onClick={cN}>home</Button>
         <Button variant='contained' color='secondary' onClick={gN}>galary</Button>
         <Button variant='contained' color='error' onClick={coN}>contacts</Button>
    </div>
  )
}

export default UseE
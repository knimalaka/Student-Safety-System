import React, {useState} from 'react';
import { Router } from 'react-router';
import NavBar from './NavBar';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';

function Home (){

  const generateQrCode = async () =>{
    try{
      const response = await QRCode.toDataURL('Test QR');
      console.log(response); 
    }catch(error){
      console.log(error);
    }
  }


  return(
    <>
    <NavBar />
      <div className="Home">
      <h2>Home</h2>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField label="Enter Text Here"/>
              <Button className="qrButton" variant="contained" 
              color="primary" onClick={() => generateQrCode()}>Generate</Button>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
          </Grid>
        </CardContent>
      </div>
    </>
  )
}

export default Home;


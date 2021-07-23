import React, {useState} from 'react';
import NavBar from './AdminNavBar';
import QrReader from 'react-qr-reader';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';

function AdminHome(){

  const [scanResultWebcam, setScanResultWebcam] = useState('');

  const handleErrorWebCam = (error) => {
    console.log(error);
  }

  const handleScanWebCam = (result) => {
    if (result){
      setScanResultWebcam(result);
    }
  }

  return(
    <>
    <NavBar />
    <div className = "AdminHome">     

    <Grid container spacing={2}>
      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
        <h2>Mark Attendance Here</h2>
        <QrReader className="QrReader"
        delay={300}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        />
        <h1>Student ID: {scanResultWebcam}</h1>
    
    
      </Grid>
    </Grid>


    </div>

    </>       
  )
}

export default AdminHome;



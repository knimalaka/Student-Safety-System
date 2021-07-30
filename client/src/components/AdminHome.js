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

    <div className = "AdminHomeAlign">

    <h1>Scan QR code</h1>

    <Grid container spacing={2}>
      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
        <QrReader className="QrReader"
        delay={300}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        />

          <h2>Student ID: {scanResultWebcam}</h2>

      </Grid>
    </Grid>

    </div>
    </div>

    </>       
  )
}

export default AdminHome;



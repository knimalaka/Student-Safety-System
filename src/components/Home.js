import React, {useState} from 'react';
import { Router } from 'react-router';
import NavBar from './NavBar';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';

function Home (){
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateQrCode = async () =>{
    try{
      const response = await QRCode.toDataURL(text);
      setImageUrl(response); 
    }catch(error){
      console.log(error);
    }
  }


  return(
    <>
    <NavBar />
      <div className="Home">
        <CardContent>
          <Grid container spacing={2}>
            <Grid className="QRcode" item xl={4} lg={4} md={6} sm={12} xs={12}>
            <h2>My QR code</h2>

              <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
              <Button className="qrButton" variant="contained" 
              color="primary" onClick={() => generateQrCode()}>Generate</Button>
              <br/>
              <br/>
              <br/>
              {imageUrl ? (
                <a href={imageUrl} download>
                <img src={imageUrl} alt="img"/>
                </a>) : null}
              <br/>
              <br/>
              <Button className="QRdownload" variant="contained" 
              color="primary" href={imageUrl} download>Download</Button>
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


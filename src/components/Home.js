import React, {useState} from 'react';
import { Router } from 'react-router';
import NavBar from './NavBar';

function Home (){

  return(
    <>
    <NavBar />
      <div className="Home">
        <h2>Home</h2>
      </div>
    </>
  )
}

export default Home;


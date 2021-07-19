import React, {useState} from 'react';
import NavBar from './AdminNavBar';
import {Container, Card, CardContent, makeStyles} from '@material-ui/core';

function MarkAttendance(){

  return(
    <>
    <NavBar />
    <div className = "MarkAttendance">         

            <h2>Mark Attendance Here</h2>

    </div>

    </>       
    )
}

export default MarkAttendance;


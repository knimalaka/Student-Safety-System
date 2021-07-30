import React, {useState} from 'react';
import NavBar from './AdminNavBar';
import * as ReactBootStrap from "react-bootstrap";

function AttendanceReport(){

    const attendance = [
        {StudentID:"00001", Date:"2021.07.10", ArrivalTime:"07:20", DepatureTime:"13:35", ArrivalType:"NotLate"},
        {StudentID:"00002", Date:"2021.07.10", ArrivalTime:"07:10", DepatureTime:"13:45", ArrivalType:"NotLate"},
        {StudentID:"00003", Date:"2021.07.10", ArrivalTime:"07:40", DepatureTime:"13:25", ArrivalType:"Late"},
        {StudentID:"00004", Date:"2021.07.10", ArrivalTime:"07:25", DepatureTime:"13:30", ArrivalType:"NotLate"},    
    ]

function renderAttendance(attendance,index){
    return(
        <tr>
            <td>{attendance.StudentID}</td>
            <td>{attendance.Date}</td>
            <td>{attendance.ArrivalTime}</td>
            <td>{attendance.DepatureTime}</td>
            <td>{attendance.ArrivalType}</td>
        </tr>
        
    )
}

    return( 
        <>
        <NavBar />
            <div className = "AttendanceReport">         
                <h2>Attendance Report</h2>
                <br/>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Student ID</th>
                        <th>Date</th>
                        <th>Arrival Time</th>
                        <th>Depature Time</th>
                        <th>Arrival Type</th>
                        </tr>
                    </thead>
                    <tbody>
                      {attendance.map(renderAttendance)}
                    </tbody>
                    </ReactBootStrap.Table>
            </div>
        </>
    )
}

export default AttendanceReport;



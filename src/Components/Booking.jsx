import React from "react";
import './Details.css'
const Booking =()=>{
    return(
        <>
            <div className="booking">
                <input type="text" placeholder="Enter Your Name"/><br />
                <input type="number" placeholder="Enter Sheet Number"/><br />
                <button onClick={()=>{return(alert("Your Ticket is Booked"))}}>Book My Show</button>
            </div>
        </>
    )
}

export default Booking;
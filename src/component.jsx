import React, { useState } from 'react';

const PopupComponent = ({}) => {
  

  return (
    <div>
     
    
        <div className="popup">
          <div className="popup-content">
            <h2 class="h2">Enter Name and Date</h2><br></br>
            <form class="form">
          
              <label htmlFor="name" class="form">Name:</label>
              <input type="text" id="name"  /><br></br>
              <label htmlFor="date"  class="form">Date:</label>
              <input type="date" id="date"  /><br></br>
              <label htmlFor="time"  class="form">Time:</label>
              <input type="time" id="time"  /><br></br>
              <button type="submit" id="submit">Submit</button>
            </form>
          </div>
        </div>
      
    </div>
  );
};

export default PopupComponent;

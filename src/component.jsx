import React, { useState } from 'react';

const PopupComponent = ({}) => {
  

  return (
    <div>
     
    
        <div className="popup">
          <div className="popup-content">
            <span className="close" >&times;</span>
            <h2>Enter Name and Date</h2>
            <form >
          
              <label htmlFor="name" class="form">Name:</label>
              <input type="text" id="name"  /><br></br>
              <label htmlFor="date"  class="form">Date:</label>
              <input type="date" id="date"  /><br></br>
              <button type="submit" id="submit">Submit</button>
            </form>
          </div>
        </div>
      
    </div>
  );
};

export default PopupComponent;

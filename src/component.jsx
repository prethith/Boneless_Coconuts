import React, { useState } from 'react';

const PopupComponent = ({ onClose }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Handle form submission logic here
    alert("Name: " + name + "\nDuration: " + date + " hours" + "\nTime: " + time);
    
    // Clear the form inputs after submission
    setName('');
    setDate('');
    setTime('');

    // Call the onClose function passed from the parent to close the popup
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2 className="h2">Enter Name and Date</h2><br></br>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="form">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
          <label htmlFor="date" className="form">Duration:</label>
          <input type="number" id="date" value={date} onChange={(e) => setDate(e.target.value)} /><br></br>
          <label htmlFor="time" className="form">Time:</label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} /><br></br>
          <button type="submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupComponent;

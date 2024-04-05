import PopupComponent from './component';
import { useState } from 'react';

function CalendarDays(props) {
  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // For example, you can perform any necessary actions here with the name and date inputs
    console.log('Name:', name);
    console.log('Date:', date);
    // Close the popup after form submission
    closePopup();
  };

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
      date: (new Date(firstDayOfMonth)),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear()
    }

    currentDays.push(calendarDay);
  }
  
  return (
<>  
    {  showPopup && <PopupComponent/>}
    <div className="table-content">
      {
        currentDays.map((day) => {
          return (
            <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                  onClick={() => {
                    props.changeCurrentDay(day);
                    console.log("hellow")
                    setShowPopup(true);
                    
                  }

                  }>
              <p>{day.number}</p>
            </div>
          )
        })  
      }
    </div>

    </>
  )
}

export default CalendarDays;

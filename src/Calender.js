import { useState ,React} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
function Calenderview({moods}){

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    return(
        <div style={{margin:25,width:300,backgroundColor:"#EFEEEA" }}>
            <Calendar tileContent={({ date, view }) => {

  if (view === 'month') {
    const formattedDate = formatDate(date);
    const mood = moods[formattedDate]?.[0];

    if (mood === 'happy') {
        
      return <div style={{ backgroundColor: 'pink', borderRadius: '50%', width: 8, height: 8, margin: 'auto', marginTop: 2 }} />;
    }
    if (mood === 'confused') {
      return <div style={{ backgroundColor: 'green', borderRadius: '50%', width: 8, height: 8, margin: 'auto', marginTop: 2 }} />;
    }
    if (mood === 'sad') {
        return <div style={{ backgroundColor: 'grey', borderRadius: '50%', width: 8, height: 8, margin: 'auto', marginTop: 2 }} />;
      }
      if (mood === 'angry') {
        return <div style={{ backgroundColor: 'red', borderRadius: '50%', width: 8, height: 8, margin: 'auto', marginTop: 2 }} />;
      }
      if (mood === 'cry') {
        return <div style={{ backgroundColor: 'blue', borderRadius: '50%', width: 8, height: 8, margin: 'auto', marginTop: 2 }} />;
      }
  }
  return null;
}}/>
        </div>
    );
}
export default Calenderview;
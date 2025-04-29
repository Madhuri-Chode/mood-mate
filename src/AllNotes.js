import React from "react";
import './Note.css'
import happy from './assets/happy-face.png';
import confused from './assets/confused.png';
import sad from './assets/sad.png';
import angry from './assets/angry.png';
import cry from './assets/emoji.png'
import dustbin from './assets/delete.png';
export default function AllNotes({moods,setMoods}){

    function handleDelete(date){
        
        
        const newMood={...moods};
        delete newMood[date];
        setMoods({...newMood});
        localStorage.setItem("moods",JSON.stringify({...newMood}));
    }
    return(
        <>
            <h1 className="titlee" >All Notes</h1>
            <div className="container">
                {Object.keys(moods).map((date)=>
                    <div className="note" key={date}>
                        <div className="notecontainer">
                            <div className="Delete"><img alt="delete" className="delete" src={dustbin} onClick={()=>handleDelete(date)}/></div>
                            <div className="firstRow">
                                <div>{moods[date][0]==="happy" ? <img src={happy}  alt="happy"/> : moods[date][0]==="confused"? <img src={confused} alt="confused"/> : moods[date][0]=== "sad" ? <img src={sad} alt="sad"/>: moods[date][0]==="angry" ? <img src={angry} alt="angry"  />:<img src={cry} alt="cry"/> }</div>
                                <h3 >{moods[date][1]}</h3>
                            </div>
                            <div className="secondRow">
                            <p className="userDate">{date}</p>
                            
                            <div className="footer">
                            <img alt="weather icon" src={`https://openweathermap.org/img/wn/${moods[date][3]}.png`} />
                            <p className="temp">{moods[date][2]}</p>
                            </div>
                           
                            </div>
                            
                            
                        </div>

                    </div>
                )}
            </div>
        </>
    );
}
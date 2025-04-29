import { useState} from "react";
import sad from './assets/sad.png'
import angry from './assets/angry.png';
import confused from './assets/confused.png';
import happy from './assets/happy-face.png';
import cry from './assets/emoji.png';
import './CollectMood.css';
function CollectMood({moods,setMoods,temp,icon}){
    const [moodtype,setMoodtype]=useState("");
    const [note,setNote]=useState("");
    //const[date,setDate]=useState( new Date().toDateString());
    function handleClick(value){
        setMoodtype(value);
    }
    function handleNote(e){
        setNote((val)=> e.target.value);
    }
    function formatDate(date){
        const year=date.getFullYear();
        const month=(date.getMonth()+1).toString().padStart(2,'0');
        const day=date.getDate().toString().padStart(2,'0');

        return `${year}-${month}-${day}`;
    }
    function handleSave(){
        const date=new Date();
        const formattedDate=formatDate(date);
        
        let moodData={};
        moodData[formattedDate]=[moodtype,note,Math.floor(temp-273),icon];
        setMoods({...moods,...moodData});
        localStorage.setItem("moods",JSON.stringify({...moods,...moodData}));
        
        
        setNote("");

        
    }
    
    return(
        <div style={{ margin:15}}>
            <h3 style={{marginLeft:90}}>{new Date().toDateString()}</h3>
            <h2 style={{margin:20}}> How are you feeling today?</h2>
            <div style={{display:"inline"}}>
                <img className={moodtype==="happy" ? "selected" : "imageRegular"} src={happy}  alt="happy" onClick={()=>handleClick("happy")}/>
                <img className={moodtype==="confused" ? "selected" : "imageRegular"} src={confused}  alt="confused" onClick={()=>handleClick("confused")} />
                <img className={moodtype==="sad" ? "selected" : "imageRegular"} src={sad}  alt="sad" onClick={()=>handleClick("sad")}/>
                <img className={moodtype==="angry" ? "selected" : "imageRegular"} src={angry}  alt="angry" onClick={()=>handleClick("angry")}/>
                <img className={moodtype==="cry" ? "selected" : "imageRegular"} src={cry}  alt="cry" onClick={()=>handleClick("cry")}/>
            </div>
            <textarea value={note} onChange={handleNote} rows={6} cols={40} placeholder="Add a note..." style={{borderRadius:10 , margin:20}}/>
            <br></br>
           {!Object.keys(moods).includes(formatDate(new Date()) )&& <button style={{width:400,padding:10 , backgroundColor:"#328E6E", color:"white"}} onClick={handleSave}> Save</button> }
            
        </div>
    );
}
export default CollectMood;
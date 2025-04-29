import { useState,useEffect ,useRef} from 'react';
import './App.css';
import CollectMood from './CollectMood';
import Calenderview from './Calender';
import AllNotes from './AllNotes';
import notes from './assets/notepad.png';
import growth from './assets/growth.png';
import Chart from './ChartComp';
function App() {
  const [temp,setTemp]=useState(0);
  const [icon,setIcon]=useState("");
  const coords=useRef({});
  const [moods,setMoods]=useState(()=>{
     const storedMoods=localStorage.getItem("moods");
     return storedMoods ? JSON.parse(localStorage.getItem("moods")) : {}
  });
  const[showNotes,setShowNotes]=useState(true);
  useEffect(function(){

    const geo=navigator.geolocation;
    if(!geo){
      console.log("it is not supported");
      return;
    }
    geo.getCurrentPosition(handleSuccess,handleError);
    function handleError(err){
      console.log(err.message);
    }
    function handleSuccess(position){
      
      
       coords.current= position.coords;
       
       handleFetch();
    }

    
  },[coords.latitude,coords.longitude]);
  async function handleFetch() {
        
        
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.current.latitude}&lon=${coords.current.longitude}&appid=d362a7f7496ffc86af82de11a7dce28a`);
        const data=await res.json();
        setIcon(data.weather[0].icon);
        setTemp(data.main.temp);
  
    }
    
  return (
    <div className="App">
      <div className='container'>
        <div>
        <div className='inner-container' style={{margin:20}}>
        <div  style={{justifyItems:'flex-start',color:'white',flex:1}}><h1>Mood-Mate🪐</h1></div>
        <div style={{flex:1, justifyItems:'flex-end',color:'white'}}>
          <div style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
            <img alt='weather icon' src={`https://openweathermap.org/img/wn/${icon}.png`} />
          <h2>{Math.floor(temp-273)}°C</h2></div>
          </div>
        </div>
        <div className='second-row'>
        <div className='collectmood'><CollectMood moods={moods} setMoods={setMoods} temp={temp} icon={icon}/></div>
        <div className='calenderView'><Calenderview moods={moods}/></div>
        </div>
        
          <div className='utils'>
            <div> <img className='utils-img'  src={notes} alt='shownotes' onClick={()=>setShowNotes(true)}/></div>
            <div><img className='utils-img' src={growth} alt='showgraph' onClick={()=>setShowNotes(false)}/></div>
           
            
          </div>
        
          <div>
          {showNotes ? <AllNotes icon={icon} moods={moods} setMoods={setMoods}/> : <Chart moods={moods}/>} 
      </div>
        </div>
          
        
      </div>
      
        </div>

  );
}

export default App;

import {useState,useEffect} from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
export default function Chart({moods}){
    ChartJS.register(
        CategoryScale, // Register CategoryScale for axis
        LinearScale,   // Register LinearScale for the y-axis
        PointElement,  // Register for data points
        LineElement,   // Register for the line chart
        Title,         // Register title
        Tooltip,       // Register tooltips
        Legend         // Register legend
      );
      const hi=[];
    const[days,setDays]=useState(Object.keys(moods));
    const[moodEntries,setMoodEntries]=useState(()=>{
        const entries=[];
        Object.keys(moods).map((key)=>{
            
            if(moods[key][0]==="happy"){
                entries.push(5);
            }
            else if(moods[key][0]==="confused"){
                entries.push(4);
            }
            else if(moods[key][0]==="angry"){
                entries.push(3);
            }
            else if(moods[key][0]==="sad"){
                entries.push(2);
            }
            else{
                entries.push(0);
            }
            
        })
        return entries;
    });
    console.log(typeof hi);
    return (
        <div style={{ display:"flex" , justifyContent:"center"}}>
            
            <Line data={{
                labels: days,
                datasets: [
                  {
                    label: 'moods',
                    data: moodEntries,
                    borderColor: 'white',
                    backgroundColor: 'white',
                    
                  },
                ],
            }}/>
        </div>
    );
}
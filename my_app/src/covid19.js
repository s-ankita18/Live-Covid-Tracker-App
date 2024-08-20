import React, { useEffect, useState } from "react";
import './covid19.css';

function Covid(){

    const [data, setData] = useState({
        confirmed: 12345678,
        recovered: 12000000,
        deaths: 300000,
        active: 500000,
        lastupdatedtime: "01/01/2024 12:00 PM"
    });

    const getCovidData= async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch(err){
            console.log('Error fetching COVID-19 data:', err);
        }
    }

   useEffect(() =>{
      getCovidData();
   }, []);

    return ( 
        <>
        <section>
          <h1>🔴 LIVE</h1>
          <h2>COVID-19 CORONAVIRUS TRACKER</h2> 
          
          <ul>
            <li className="card">
                <div className="inner_card1">
                   <p className="card_name"><span>OUR</span> COUNTRY</p>
                   <p className="card_total small_card" style={{fontSize:"2rem"}}>INDIA</p>
                </div>
            </li>
            <li className="card">
                <div className="inner_card2">
                   <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                   <p className="card_total small_card" style={{fontSize:"2rem"}}>{data.recovered}</p>
                </div>
            </li>   
            <li className="card">
                <div className="inner_card3">
                   <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
                   <p className="card_total small_card" style={{fontSize:"2rem"}}>{data.confirmed}</p>
                </div>
            </li>
            <li className="card">
                <div className="inner_card4">
                   <p className="card_name"><span>TOTAL</span> DEATH</p>
                   <p className="card_total small_card" style={{fontSize:"2rem"}}>{data.deaths}</p>
                </div>
            </li>
            <li className="card">
                <div className="inner_card5">
                   <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                   <p className="card_total small_card" style={{fontSize:"2rem"}}>{data.active}</p>
                </div>
            </li>
            <li className="card">
                <div className="inner_card6">
                   <p className="card_name"><span>LAST</span> UPDATED</p>
                   <p className="card_total small_card" style={{fontSize:"2rem",marginBottom:"20%"}}>{data.lastupdatedtime}</p>
                </div>
            </li>
          </ul>
          </section>
        </>
    );
}
export default Covid;
import React from 'react';
import './card.styles.css';

export const Card  = (props) => {
    const lastUpdated = new Date(new Date(props.country.updated).toString());
    return (
        <div className='card-container'>
            <h1>{console.log(lastUpdated)}</h1>
            <img className='flag-container' alt={`${props.country.countryInfo.iso3}`} src={props.country.countryInfo.flag}/>
        </div>
    )
}



// <h1>{console.log(lastUpdated)}</h1>

// <h1>{(lastUpdated)}</h1>

// <h4>{new Date(new Date(props.country.updated).toString())}</h4> NOT WORKING AT ALL

// <h4>{console.log(new Date(new Date(props.country.updated).toString()))}</h4> WORK FINE ON CONSOLE LOG
// <h3 >Total Active: {props.country.updated}</h3> WORKS ON MS FORMAT


// export onst Card  = (props) => {
// return(
//     <div className='card-container'>
//         <img className='flag-container' alt={`${props.country.countryInfo.iso3}`} src={props.country.countryInfo.flag}/>
//         <h1>Country: {props.country.country}</h1>
//         <div className='cases-container'>
//         <h2>Total Cases: {props.country.cases}</h2>
//         <span>Today Cases: {props.country.todayCases}</span>
//         </div>
//         <div className='cases-container'>
//         <h2>Total Deaths: {props.country.deaths}</h2>
//         <span>Today Deaths: {props.country.todayDeaths}</span>
//         </div>
//         <div className='cases-container'>
//         <h3>Total Active: {props.country.active}</h3> 
//         <h3>Total Recovered: {props.country.recovered}</h3>
//         <h3>Total Critical: {props.country.critical}</h3>
//         </div>
//         <div className='cases-container'>
//         <h4>Cases per Million: {props.country.casesPerOneMillion}</h4>
//         <h4>Deaths per Million: {props.country.deathsPerOneMillion}</h4>
//         </div>
//         <div className='cases-container'>
//         <h5>Total Tests: {props.country.tests}</h5>
//         <h5>Tests per Million: {props.country.testsPerOneMillion}</h5>
//         </div>
//         <div className='cases-container'>
//         <h5>Total Active: {props.country.updated}</h5>
//         </div>
//     </div>
// )}
// }
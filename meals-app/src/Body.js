import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./body.css"

const Body = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => {
            setData(res.data.meals)
        })
    }, [])

  return (
    <div className='row'>
        {console.log(data)}
        {
            data.map(dat => {
                return (
                    <div className='col-md-4'>
                        <h5>{dat.strMeal}</h5>
                        <img src = {dat.strMealThumb} className = "image"></img>
                        <h5>{dat.idMeal}</h5>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Body
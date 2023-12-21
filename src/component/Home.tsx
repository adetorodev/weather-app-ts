import React, { useEffect, useState } from 'react'
import GetWeather from './GetWeather'
import "./Home.css"
import axios from 'axios'

interface WeatherData {
    main: {
        temp: number
    }
    weather: {
        description: string
    }
}

type weatherCity = {
    city: string;
}




const Home = (city: weatherCity) => {

    const [weather, setWeather ] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const apiKey = "c16a4be2d189ddb57873d2181b458b0e";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
        const city = "city";
    
        axios
            .get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
            .then((response) => {
                setWeather(response.data);
            })
            .catch((error) => {
                setError("error fetching data")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if(error){
        return <div>{error}</div>
    }

    if(error){
        return <div>{error}</div>
    }
  return (
    <div className='home'>
        <h1>Weather App</h1>
        <GetWeather  />

    </div>
  )
}

export default Home
import React from 'react'
import "./GetWeather.css"


type Props = {}

const GetWeather = (props: Props) => {
  return (
    <div>
        <input placeholder='Enter your city' className='input' />
        <button  className='button'>Get Weather</button>
    </div>
  )
}

export default GetWeather
import React from 'react'
import { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
    const [rideDuration, setRideDuration] = useState(0)
    
    useEffect(()=>{
    rideDuration = fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic3llZHFhbWJlcjEyIiwiYSI6ImNsMTVjNWt2ejJkNXkzZHJ0eWxqaGhuY2YifQ.MgOJVawbsYpL_bEbh7XRUg`
    )
    .then(res=>res.json())
    .then(data=>{
        setRideDuration(data.routes[0].duration / 7)
    })
    }, [pickupCoordinates, dropoffCoordinates])    
  return (
   <Wrapper>
       <Title>Choose one car for Ride</Title>
       <CarList>
           {carList.map((car, index)=>(
               <Car key={index}>
                   <CarImage src={car.imgUrl} />
                   <CarDetails>
                       <Service>{car.service}</Service>
                       <Time>5 min away</Time>
                   </CarDetails>
                   <Price>{'Rs' + (rideDuration * car.multiplier).toFixed(2)}</Price>
               </Car>
           )) }
       </CarList>
   </Wrapper>
  )
}

export default RideSelector
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`

text-gray-500 text-center text-xs py-2 border-b`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-4 items-center
`
const CarImage = tw.div`
h-14 mr-14`
const CarDetails = tw.div`
font-medium flex-1`
const Service = tw.div``
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm font-bold`

import React from 'react'
import { useEffect, useState } from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link';

const Confirm = (props) => {
    const router = useRouter()
    const {pickup, dropoff} = router.query
    
    const [pickupCoordinates, setpickupCoordinates] = useState([0, 0])
    const [dropoffCoordinates, setdropoffCoordinates] = useState([0, 0])
    
    const getPickupCoordinates = (pickup) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
       new URLSearchParams({
           access_token: "pk.eyJ1Ijoic3llZHFhbWJlcjEyIiwiYSI6ImNsMTVjNWt2ejJkNXkzZHJ0eWxqaGhuY2YifQ.MgOJVawbsYpL_bEbh7XRUg",
           limit: 1
       })
    )
    .then(response => response.json())
    .then(data => {
        console.log("Pickup")
        // console.log(data.features[0].center)
        setpickupCoordinates(data.features[0].center)
    })
 };

 const getDropoffCoordinates = (dropoff) => {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
     new URLSearchParams({
         access_token: "pk.eyJ1Ijoic3llZHFhbWJlcjEyIiwiYSI6ImNsMTVjNWt2ejJkNXkzZHJ0eWxqaGhuY2YifQ.MgOJVawbsYpL_bEbh7XRUg",
         limit: 1
     })
  )
  .then(response => response.json())
  .then(data => {
      console.log("Drop off")
      setdropoffCoordinates(data.features[0].center)
  })
};

useEffect(()=>{
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
}, [pickup, dropoff])

  return (
    <Wrapper>
        <ButtonContainer>

            <Link href="/search">
      <BackButton src = 'https://img.icons8.com/ios-filled/50/000000/left.png' />
      </Link>
        </ButtonContainer>
        <Map 
        pickupCoordinates = {pickupCoordinates}
        dropoffCoordinates = {dropoffCoordinates}
        />
        <RideContainer>
            <RideSelector 
            pickupCoordinates = {pickupCoordinates}
            dropoffCoordinates = {dropoffCoordinates}
            />
            <ConfirmButtonContainer>
                <ConfirmButton>
                    Confirm UberX
                </ConfirmButton>
            </ConfirmButtonContainer>
        </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
flex flex-col h-screen
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img`
h-full object-contain
`
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div``
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

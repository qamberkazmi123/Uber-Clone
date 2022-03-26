import React from 'react'
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3llZHFhbWJlcjEyIiwiYSI6ImNsMTVjNWt2ejJkNXkzZHJ0eWxqaGhuY2YifQ.MgOJVawbsYpL_bEbh7XRUg';

const Map = () => {
  useEffect(() => {  
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [74.329376, 31.582045],
      zoom: 3
    })
  })
  return (
    <Wrapper id='map'></Wrapper>
  )
}

const Wrapper = tw.div`
flex-1
`
export default Map


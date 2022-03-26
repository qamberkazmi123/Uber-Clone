import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const Search = () => {
  return (
  <Wrapper>
    <ButtonContainer>
      <Link href="/">
      <BackButton src = 'https://img.icons8.com/ios-filled/50/000000/left.png' />
      </Link>
    </ButtonContainer>
    <InputContainer>
      <FromtoIcons>
        <Circle src = 'https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
        <Line src = 'https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
        <Square src = 'https://img.icons8.com/windows/50/000000/square-full.png' />
      </FromtoIcons>
      <InputBoxes>
        <Input placeholder='Enter pickup Location' />
        <Input placeholder='Where to' />
      </InputBoxes>
      <PlusIcon src = 'https://img.icons8.com/ios/50/000000/plus-math.png' />
    </InputContainer>
    <SavedPlaces>
      <StarIcon src = 'https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
      Saved Places
    </SavedPlaces>
    <ButtonLocation>Confirm Locations</ButtonLocation>
  </Wrapper>
  )  
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
w-12
`
const InputContainer = tw.div`
flex bg-white items-center px-4 mb-2
`
const FromtoIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon = tw.img`
  h-10 bg-gray-200 
`
const SavedPlaces = tw.div`
bg-white h-13 px-4 py-3 flex font-bold text-lg font-serif my-2
`
const StarIcon = tw.img`
bg-gray-400 p-1.5 rounded-full mr-2 h-10 w-10 
`
const ButtonLocation = tw.div`
bg-black text-white text-center text-xl m-5 pb-2 pt-1 h-10
`
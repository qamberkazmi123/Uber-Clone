import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Search from './search'
import Link from 'next/link'

export default function Home() {
 
  return (
    <Wrapper>
       <Map />
       <ActionItems>Lets get Started
         <Header>
           <UberLogo src = 'https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
           <Profile>
             <Name>Ali</Name>
             <UserImage src='https://picsum.photos/id/237/200/300' />
           </Profile>
         </Header>
         <ActionButtons>
           <Link href = "/search">

           <ActionButtton>
             <ActionButtonImage src = 'https://i.ibb.co/cyvcpfF/uberx.png' />
             Ride
           </ActionButtton>
           </Link>
           <ActionButtton>
             <ActionButtonImage src = 'https://i.ibb.co/n776JLm/bike.png' />
             2-Wheels
           </ActionButtton>
           <ActionButtton>
             <ActionButtonImage src = 'https://i.ibb.co/5RjchBg/uberschedule.png' />
             Reserved
           </ActionButtton>
         </ActionButtons>
         <InputButton>Where to</InputButton>
       </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div `
  flex flex-col bg-white h-screen
`

const ActionItems = tw.div `
flex-1
`
const Header = tw.div`
flex justify-between
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-20
`
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`
const ActionButtons = tw.div`
flex
`
const ActionButtton = tw.div`
flex flex-1 flex-col m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5 bg-gray-200
`
const InputButton = tw.div`
h-20 bg-gray-200 mt-8 mr-4 ml-4 p-4 flex flex-1 items-center rounded-lg text-2xl
`
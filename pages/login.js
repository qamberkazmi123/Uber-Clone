import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {
    const router = useRouter()

    useEffect(()=>{
       onAuthStateChanged(auth,user => {
           if(user){
               router.push('/')
           }
       })
    }, [])
  return (
      <Wrapper>
          <Uberlogo src='https://i.ibb.co/ZMhy8ws/uber-logo.png' />
          <SigninButton onClick={()=> signInWithPopup(auth, provider)}>Sign in with Google</SigninButton>
      </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
flex flex-col`
const Uberlogo = tw.img`
h-20 w-auto
`
const SigninButton = tw.div`
bg-black text-white text-center self-center p-4 m-4`
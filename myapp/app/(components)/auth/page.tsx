"use client"

import {useState, useEffect, useContext} from 'react'
import {useRouter} from 'next/navigation'

import axios from 'axios'
import { BACKEND_SERVER } from '@/app/custom_constants'
import AuthContext from '@/app/context/context'

export default function Verify(props){
  // JWT - Token validation
  const [isauthorized, setAuthorized] = useState(false)
  const router = useRouter()

  const [showMonthlyCalender, setMonthlyCalendar] = useState(false);

  const {token, updateToken} = useContext(AuthContext)

  console.log(token)

  // if (props.value.token.token !==""){
  //   axios.post(BACKEND_SERVER+"api/token/verify", {
  //     token: props.value.token.token
  //   })
  //   .then(function (response) {
  //     if(response.status != 200){
  //       props.value.updateToken({})
  //       router.push("/")
  //     }else{
  //       setAuthorized(true)
  //     } 
  //   })
  //   .catch(function (error) {
  //     router.push("/")
  //   });
  // }

  return (
    <></>
  )
}
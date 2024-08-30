"use client"

import { Inter } from "next/font/google";
import "../globals.css";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "../base/Header"
import Footer from "../base/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter()
  const BACKEND_SERVER = "http://localhost:8000/"

  const [authorized, isAuthorized] = useState(false)
  const [token, setToken] = useState(null)

  useEffect(() => { (async () => {
    await fetch(BACKEND_SERVER+'api/token/verify', {
      method: 'POST',
      body: JSON.stringify({
          token: localStorage.getItem('items'),
    }),
    headers: {
        'Content-type': 'application/json'
    }
    }).then(response=>{
      if(response.status===401){
        setToken(null)
        router.push("/")
        return;
      }else if(response.status===200){
        isAuthorized(true)
        const res = response.json().then((data)=>{
          console.log(data)

          localStorage.setItem('items', data.access);

          setToken(data["access"])
        })
      }
    })
  })()
}, [router])

  if ( authorized == false ){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}
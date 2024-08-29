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

  const [autorized, isAuthorized] = useState(false)

  useEffect(() => { (async () => {
    await fetch(BACKEND_SERVER+'api/token', {
      method: 'POST',
      body: JSON.stringify({
          username: "admin",
          password: "admin"
    }),
    headers: {
        'Content-type': 'application/json'
    }
    }).then(response=>{
      if(response.status===401){
        router.push("/")
        return;
      }else if(response.status===200){
        isAuthorized(true)
      }
    })
  })()
}, [router])

  if ( autorized == false ){
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
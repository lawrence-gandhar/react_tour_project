"use client"

import { Inter } from "next/font/google";
import "../globals.css";
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useRouter } from "next/navigation";

import Header from "../base/Header"
import Footer from "../base/Footer";

import { BACKEND_SERVER } from "../custom_constants";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {

  // JWT - Token validation
  const [token, setToken] = useState("")
  const router = useRouter()

  useEffect(() => {
      setToken(localStorage.getItem('items'));
  }, []);

  if (token !==""){
    axios.post(BACKEND_SERVER+"api/token/verify", {
      token: token
    })
    .then(function (response) {
      if(response.status != 200){
        router.push("/")
      } 
    })
    .catch(function (error) {
      router.push("/")
    });
  }

  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}
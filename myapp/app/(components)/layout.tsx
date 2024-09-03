"use client"

import {useContext} from 'react'

import { Inter } from "next/font/google";
import "../globals.css";

import Header from "../base/Header"
import Footer from "../base/Footer";
import Verify from "./auth/page"
import AuthContext from "../context/context";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {

  const {token, updateToken} = useContext(AuthContext);

  return (
    <div>
        <Verify></Verify>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
    
  )
}
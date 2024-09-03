// import type { Metadata } from "next";
"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import {createContext, useState} from 'react'
import AuthContext from "./context/context";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "MyTourDiary",
//   description: "Developed By Lawrence Gandhar",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [token, setToken] = useState({})

  const updateToken = (value) => {
    setToken(value)
  }

  return (
    <html lang="en">
      <head>
      <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
      ></link>
      </head>
      <body className={inter.className}>
        <AuthContext.Provider value={{token, updateToken}}>
        {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}

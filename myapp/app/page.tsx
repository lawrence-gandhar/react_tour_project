"use client";
import Image from "next/image";
import '../styles/login_page.css';
import { useState, useEffect } from "react";

export default function Home() {

  const [action, setAction] = useState("Login")
  const [username, setUsername] = useState("")
  const [passwd, setPassword] = useState("")
  const [confirm_passwd, setConfirmPassword] = useState("")
  const BACKEND_SERVER = "http://localhost:8000/"

  const [authorized, setAuthorized] = useState(-1)

  const signin = async () => {
    console.log(username, passwd, BACKEND_SERVER)

    let response = await fetch(BACKEND_SERVER+'api/token', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: passwd
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response=>{
      if(response.status===401){
        setAuthorized(0)
        console.log(authorized)
      }else if(response.status===200){
        setAuthorized(1)
      }
    })
  }
  

  const signup = async () => {
    if (passwd !== confirm_passwd){
      alert("Password and Confirm Password should match")
    }
  } 

  const validateConfirmPassword = () => {
    console.log("validate")
    if (confirm_passwd.trim().length == 0){
      alert("confirm Password is required")
    }else{
      if (passwd !== confirm_passwd){
        alert("Password and Confirm Password should match")
      }
    }
  }

  return (
    <div className="backgroundImage h-screen">
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="grid min-h-full w-80 login-card">
          <div className="col-span-12 flex justify-center items-center">
            <Image alt="Login" src="/login_header.png" height={500} width={200}/>
          </div>
          <p className="pb-3 text-center col-span-12 text-white font-sans text-xl tracking-wide">
            MyTourPlanner
          </p>
          <p className="col-span-12 py-3 text-center login-card-head">{action}</p>
          <form className="col-span-12 login-div" action="#">
            <div className="py-2 px-4 pt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input value={username} onChange={e => {setUsername(e.target.value)}} type="text" name="username" 
                id="username" 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="name@company.com" required />
            </div>
            <div className="py-2 px-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input value={passwd} onChange={e => {setPassword(e.target.value)}} type="password" 
                name="password" id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 
                focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" required/>
            </div>

            {action==="Sign Up"?
              <div className="py-2 px-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                  <input value={confirm_passwd} onChange={e => {setConfirmPassword(e.target.value)}} 
                      onBlur={validateConfirmPassword} 
                      type="password" name="confirm_password" id="confirm-password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>:<div></div>
            }

            {action==="Login"?
              <div className="flex items-center justify-between py-2 px-4">
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>:<div></div>
            }
            
            <div className="py-2 px-4">
              {
                action==="Sign Up"?
                <button type="button" className="w-full btn-primary py-1 rounded">Sign Up</button>:
                <button type="button" className="w-full btn-primary py-1 rounded" onClick={signin}>Sign in</button>
              }              
            </div>
              
            {
              authorized == 0 && action==="Login" ? 
                <div className="col-span-12 px-4 py-2 ">
                <p className="w-full error-div px-2 py-2">
                  Not a valid username or password. Please check the username and password.
                </p></div>:<div></div>

            }

            {
                action==="Sign Up"?
                <div className="py-2 px-4 pb-4 text-center">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Have an account ? 
                      <a href="#" onClick={()=>{
                          setAction("Login"); 
                          setAuthorized(-1)
                          setUsername(""); 
                          setPassword("");
                          setConfirmPassword("");
                        }
                      } className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                  </p>
                </div>:
                <div className="py-2 px-4 pb-4 text-center">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? 
                      <a href="#" onClick={()=>{
                            setAction("Sign Up"); 
                            setAuthorized(-1);
                            setUsername(""); 
                            setPassword("");
                            setConfirmPassword("");
                          }
                        } 
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
                </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

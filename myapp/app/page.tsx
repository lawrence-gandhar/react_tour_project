import Image from "next/image";
import '../styles/login_page.css';

export default function Home() {
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
          <p className="col-span-12 py-3 text-center login-card-head">Login</p>
          <form className="col-span-12 login-div" action="#">
            <div className="py-2 px-4 pt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="name@company.com" required />
            </div>
            <div className="py-2 px-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="py-2 px-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
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
            </div>
            <div className="py-2 px-4">
              <button type="submit" className="w-full btn-primary py-1 rounded">Sign in</button>
              <button type="submit" className="w-full btn-primary py-1 rounded">Sign Up</button>
            </div>
            <div className="py-2 px-4 pb-4 text-center">
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

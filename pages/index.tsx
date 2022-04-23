import Head from 'next/head'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Binary Pay</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className="text-center text-3xl font-roboto font-bold mb-4">
          <span className='text-green-500'>Binary</span>Pay
        </div>

        <div className="bg-white rounded-2xl shadow-2xl w-2/3 max-w-md h-96">
          <div className='p-5 py-5'>
            <div className="text-center font-bold text-3xl mb-6 font-roboto">
              <span className='text-green-500'>Sign in</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 rounded-lg flex items-center mb-3 ml-4 -mr-4">
                <FaUser className='text-gray-400 m-2' />
                <input type="text" placeholder="Username" className='bg-gray-100 font-roboto focus:outline-none text-sm flex-1' />
              </div>

              <div className="bg-gray-100 w-64 p-2 rounded-lg flex items-center mb-3">
                <MdLockOutline className='text-gray-400 m-2' />
                <input type={showPassword ? 'text':'password'} placeholder="Password" className='bg-gray-100 peer placeholder-transparent focus:outline-none text-sm flex-1'/>
                <label
                 className="absolute
                  transition-all
                  left-4
                  top-1
                  font-roboto
                  text-gray-600
                  text-sm
                  peer-placeholder-shown:text-gray-400
                  peer-placeholder-shown:text-base
                  peer-placeholder-shown:top-4
                  pointer-events-none
                  "
                >
                  Password
                </label>

                <label
                  onClick={()=>setShowPassword(!showPassword)}
                  className=" rounded px-2 
                    py-1 text-sm 
                    text-gray-600 
                    font-roboto
                    cursor-pointer" 
                    htmlFor="toggle">{showPassword?'Hide':'Show'}
                  </label>
              </div>

              <div className='flex justify-between w-64 mb-5'>
                <label className='flex items-center text-xs'>
                  <input type="checkbox" name="Remember" className='mr-1' />
                  Remember Password
                </label>
                <a href='#' className='text-xs mr-4'>Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
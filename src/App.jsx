import './style.css'
import logo from './logo.svg'
import { useState } from 'react'
import { Shuffled } from './components/Shuffled'
import { Complete } from './components/Complete'

export const App = () => {
    return (
        <main className='mb-16'>
            <header className='pt-12 text-white'>
                <img src={logo} alt="" width="60px" className='mx-auto mb-4' />
                <h1 className='text-3xl text-center'>Generate Random Password</h1>
                <p className="text-center mt-8 text-xl">New Password</p>
                <hr className='w-1/12 mx-auto my-4' />
            </header>
            <div className='flex flex-col items-center mt-8'>
                <nav className='flex gap-8 text-white mb-8'>
                    <p className='hover:text-gray-300 border-b cursor-pointer'>Shuffled Words</p>
                    <p className='hover:text-gray-300  cursor-pointer'>Complete Words</p>
                </nav>
               
               <Shuffled />
            </div>
        </main>
    )
}
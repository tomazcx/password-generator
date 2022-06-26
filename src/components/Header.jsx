import logo from '../assets/logo.svg'
import {Link, useParams} from 'react-router-dom'
import { useState } from 'react'
import classNames from 'classnames'

export const Header = () =>{
    const [selectedShuffled, setSelected] = useState(0)

    return(
        <header className='pt-12  flex flex-col items-center'>
            <img src={logo} alt="" width="60px" className='mx-auto mb-4' />
            <h1 className='text-3xl text-center'>Generate Random Password </h1>
            <hr className='w-1/12 mx-auto my-4' />

            <p className='mb-5 text-center'>Create a random password based on the options chosen by yourself.</p>
            <nav className='flex gap-8 text-white mb-8'>
                <Link to={'/shuffled'} onClick={() => setSelected(1)} className={classNames('hover:bg-blue-400 hover:border-blue-400 transition-colors border border-blue-300 p-3 rounded cursor-pointer ',{
                    'bg-blue-300 text-black': selectedShuffled === 1,
                    'bg-transparent text-blue-300 hover:text-black': selectedShuffled !== 1
                })}>Shuffled Characters</Link>
                <Link to={'/complete'} onClick={() => setSelected(2)} className={classNames('hover:bg-blue-400 hover:border-blue-400 transition-colors border border-blue-300   p-3 rounded cursor-pointer',{
                    'bg-blue-300 text-black': selectedShuffled === 2,
                    'bg-transparent text-blue-300 hover:text-black': selectedShuffled !== 2
                })}>Complete Words</Link>
            </nav>
        </header>
    )
}
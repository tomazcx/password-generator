import { useState } from "react"
import {useParams} from 'react-router-dom'

export const Shuffled = () => {

    const [charNum, setCharNum] = useState(0)
    const [checkedOne, setCheckedOne] = useState(false)
    const [checkedTwo, setCheckedTwo] = useState(false)
    const [checkedThree, setCheckedThree] = useState(false)
    const [checkedFour, setCheckedFour] = useState(false)
    const [finalPassword, setPassword] = useState("")
    const [error, setError] = useState("")

    const generatePassword = () => {
        try {
            let characters = ""
            let password = ""

            if (checkedOne) {
                characters += "abcdefghijklmnopqrstuvwxyz"
            }

            if (checkedTwo) {
                characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }

            if (checkedThree) {
                characters += "!#$%&+=-/@"
            }

            if (checkedFour) {
                characters += "0123456789"
            }

            if(characters === "" || charNum < 6){
                throw new Error
            }


            const array = Array.from(characters)
            for (let i = 0; i < charNum; i++) {
                const num = Math.floor(Math.random() * array.length)
                password += array[num]
            }
            setError("")
            return password
        } catch (e) {
            setError("Invalid options.")
        }

    }

    return (
        <div className="w-full max-w-[320px]">
            <div className='flex flex-col mb-4'>
                <label htmlFor="number" className='mb-4'>Number of characters (minimun of 6)</label>
                <input type="number" className="text-black p-4 py-2 rounded-md w-full" id="number" onChange={(e) => setCharNum(e.target.value)} />
            </div>

            <div className='flex flex-col mt-8 mb-4'>
                <label htmlFor="chars" className=' mb-4'>Choose the type of characters.</label>
                <div className="flex gap-4 items-center">
                    <input type="checkbox" className="check-input" onChange={() => setCheckedOne(!checkedOne)} />
                    <label htmlFor="">Downcase letters</label>
                </div>

                <div className="flex gap-4 items-center">
                    <input type="checkbox" className="check-input" onChange={() => setCheckedTwo(!checkedTwo)} />
                    <label htmlFor="">Uppercase letters</label>
                </div>
                <div className="flex gap-4 items-center">
                    <input type="checkbox" className="check-input" onChange={() => setCheckedThree(!checkedThree)} />
                    <label htmlFor="">Special characters</label>
                </div>

                <div className="flex gap-4 items-center">
                    <input type="checkbox" className="check-input" onChange={() => setCheckedFour(!checkedFour)} />
                    <label htmlFor="">Numbers</label>
                </div>
            </div>
            
            <div className='flex flex-col mb-3'>
                <p className="text-center text-xl mt-8 mb-4">Result:</p>
                <input type="text" id="chars" className="text-black p-4 py-2 rounded-md text-center w-full disabled:bg-gray-400" value={finalPassword} maxLength={charNum} disabled />
            </div>
            <button className=" bg-blue-300 px-8 py-1.5 rounded-xl border-2 border-blue-300 text-gray-900 w-full hover:bg-blue-400 hover:border-blue-400 transition-colors" onClick={() => setPassword(generatePassword())}>Generate</button>
            <p className='text-center text-red-600 mt-4 mb-32'>{error}</p>

        </div>
    )
}
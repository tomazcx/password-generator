import { useState } from "react"

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
        <>
            <div className='flex flex-col w-1/4 mb-4'>
                <label htmlFor="number" className='text-white mb-4'>Number of characters (minimun of 6)</label>
                <input type="number" id="number" onChange={(e) => setCharNum(e.target.value)} />
            </div>

            <div className='flex flex-col w-1/4 my-4 text-white'>
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
            <button className="mt-4" onClick={() => setPassword(generatePassword())}>Generate</button>
            <p className='text-red-600 mt-4'>{error}</p>

            <div className='flex flex-col w-1/4 my-4'>
                <p className="text-center text-xl text-white mt-8 mb-4">Result:</p>
                <input type="text" id="chars" className="text-center" value={finalPassword} maxLength={charNum} disabled />
            </div>
        </>
    )
}
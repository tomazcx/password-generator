import { useState } from "react"

export const Shuffled = () => {
    const [charNum, setCharNum] = useState(0)
    const [disableInput, setInput] = useState(true)
    const [chars, setChars] = useState()
    const [repeatCharacters, setRepeat] = useState(false)
    const [finalPassword, setPassword] = useState()

    const verifyInput = (num) =>{
        if(num < 6){
            setInput(true)
        }else{
            setInput(false)
        }
        setCharNum(num)
    }
    
    const generatePassword = () =>{
        const array = Array.from(chars)
        let password = "";
        for(let i = 0; i < array.length; i++){
         password += randomChar(array)  
        }
        return password
    }

    const randomChar = (array) =>{
        const num = Math.floor(Math.random()*array.length);
        const char = array[num];
        if(repeatCharacters){
            if(char !== ""){
                array[num] = ""
                return char   
            }
            return randomChar(array)
        }

        return char
    }

    return (
    <>
        <div className='flex flex-col w-1/4 mb-4'>
            <label htmlFor="number" className='text-white mb-4'>Number of characters (minimun of 6)</label>
            <input type="number" id="number" onChange={(e) => verifyInput(e.target.value)} />
        </div>

        <div className='flex flex-col w-1/4 my-4'>
            <label htmlFor="chars" className='text-white mb-4'>Characters to be shuffled (Up to {charNum})</label>
            <input type="text" id="chars" maxLength={charNum} disabled={disableInput} onChange={(e) => setChars(e.target.value)}/>
        </div>

        <div className='flex flex-col w-1/4 my-4 text-white'>
            <label htmlFor="repeat" >Repete characters?</label>
            <div>
                <input type="radio" name="repeat" defaultChecked id="0" onChange={event => setRepeat(false)}/>
                <label htmlFor="0" className="ml-4 mr-8">No</label>
                <input type="radio" name="repeat" id="1" onChange={event => setRepeat(true)}/>
                <label htmlFor="1" className="ml-4">Yes</label>
            </div>
        </div>

        <button className="mt-4" onClick={() => setPassword(generatePassword())}>Generate</button>

        <div className='flex flex-col w-1/4 my-4'>
            <p className="text-center text-xl text-white mt-8 mb-4">Result:</p>
            <input type="text" id="chars" className="text-center" value={finalPassword} maxLength={charNum} disabled={disableInput}/>
        </div>
    </>
    )
}
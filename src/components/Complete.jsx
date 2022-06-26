import { useEffect, useState } from "react"
import { Word } from "./Word"

export const Complete = () => {
    const [wordsArray, setWordsArray] = useState([])
    const [wordInput, setWordInput] = useState("")
    const [password, setPassword] = useState("")
    let id = 0;

    const addWord = (word) => {
        if (word !== "") {
            setWordsArray(prev => [...prev, word])
        }

    }

    const deleteWord = (id) => {
        const newArray = []
        console.log(id)
        for(let i =0; i < wordsArray.length; i++){
            if(i !== id-1){
                newArray.push(wordsArray[i])
            }
        }

        setWordsArray(newArray)
        console.log(wordsArray)
    }

    const generatePassword = () =>{
        let password = ""
        const length = wordsArray.length
        for(let i = 0; i < length; i++){
            const num = Math.floor(Math.random()*length)
            password += wordsArray[num]
        }

        return password
    }
    return (
        <div className="w-full max-w-[320px]">

            <div className='flex flex-col mt-8'>
               
                <label htmlFor="word" className='mb-4'>Insert words to shuffle</label>
                <div className="flex items-center w-full">
                    <input type="text" className=" text-black flex-1 p-4 py-2 rounded-l-lg disabled:bg-gray-400" id="word" onChange={(e) => setWordInput(e.target.value)} />
                    <button onClick={() => addWord(wordInput)} className="bg-blue-300 text-black border border-blue-300 hover:border-blue-400 hover:bg-blue-400 transition-colors p-4 py-2 rounded-r-lg disabled:bg-gray-600 disabled:border-gray-600">Add</button>
                </div>


                <div className="mt-8">
                    <p className="text-center">List of words</p>
                    <hr className="mx-auto w-1/4 mt-2" />
                    <ul className="my-4 border border-gray-200 p-4 rounded">
                        {wordsArray.map(word => {
                            id +=1
                            return (
                                <Word text={word} deleteFun={deleteWord} id={id} key={id} />
                            )
                        })}
                    </ul>
                </div>

               
                <div className='flex flex-col mt-8 mb-3'>
                    <p className="text-center text-xl mb-2">Result:</p>
                    <input type="text" id="chars" className="text-black p-4 py-2 rounded-md text-center w-full disabled:bg-gray-400" value={password} disabled />
                </div>
                <button className=" bg-blue-300 px-8 py-1.5 rounded-xl border-2 border-blue-300 text-gray-900 w-full hover:bg-blue-400 hover:border-blue-400 transition-colors disabled:border-blue-100 disabled:bg-blue-100 mb-32 " disabled={wordsArray.length < 1} onClick={() => setPassword(generatePassword())}>Generate</button>

            </div>
        </div>
    )
}
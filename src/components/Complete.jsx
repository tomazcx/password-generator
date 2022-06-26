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

    const clearWords = () =>{
        setWordsArray([])
    }

    const deleteWord = (id) => {
        const newArray = []
        console.log(id)
        for (let i = 0; i < wordsArray.length; i++) {
            if (i !== id - 1) {
                newArray.push(wordsArray[i])
            }
        }

        setWordsArray(newArray)
        console.log(wordsArray)
    }

    const generatePassword = () => {
        let password = ""
        const length = wordsArray.length
        for (let i = 0; i < length; i++) {
            const num = Math.floor(Math.random() * length)
            password += wordsArray[num]
        }

        return password
    }
    return (
        <div className="w-full max-w-[320px]">

            <div className='flex flex-col'>

                <label htmlFor="word" className='mb-4'>Insert words to shuffle</label>
                <input type="text" className=" text-black p-4 py-2 rounded-md disabled:bg-gray-400" id="word" name="word" onChange={(e) => setWordInput(e.target.value)} />

                <div className="flex gap-4 items-center justify-between">
                    <button onClick={() => clearWords()} className="flex-1 bg-red-300 text-black border border-red-300 hover:border-red-400 hover:bg-red-400 transition-colors p-4 py-2 rounded-md mt-4 disabled:bg-gray-600 disabled:border-gray-600">Clear</button>
                    <button onClick={() => addWord(wordInput)} className="flex-1 bg-blue-300 text-black border border-blue-300 hover:border-blue-400 hover:bg-blue-400 transition-colors p-4 py-2 rounded-md mt-4 disabled:bg-gray-600 disabled:border-gray-600">Add</button>

                </div>



                <div className="mt-8">
                    <p className="text-center">List of words</p>
                    <hr className="mx-auto w-1/4 mt-2" />
                    <ul className="my-4 border border-gray-200 p-4 rounded">
                        {wordsArray.map(word => {
                            id += 1
                            return (
                                <Word text={word} deleteFun={deleteWord} id={id} key={id} />
                            )
                        })}
                    </ul>
                </div>


                <div className='flex flex-col mt-8 mb-3'>
                    <label htmlFor="password" className="text-center text-xl mb-2">Result:</label>
                    <input type="text" name="password" id="password" className="text-black p-4 py-2 rounded-md text-center w-full disabled:bg-gray-400" value={password} disabled />
                </div>
                <button className=" bg-blue-300 px-8 py-1.5 rounded-xl border-2 border-blue-300 text-gray-900 w-full hover:bg-blue-400 hover:border-blue-400 transition-colors disabled:border-blue-100 disabled:bg-blue-100 mb-32 " disabled={wordsArray.length < 1} onClick={() => setPassword(generatePassword())}>Generate</button>

            </div>
        </div>
    )
}
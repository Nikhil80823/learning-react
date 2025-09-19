import { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  
  const passwordRef = useRef(null)
  // to make password highligh we used password ref

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword, setCharAllowed])

  //copy 
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    < >
      <div className="w-full h-70 max-w-4xl mx-auto shadow-md rounded-lg px-4 my-8 bg-gradient-to-r from-blue-500 to-purple-500 p-8  text-grey-500 ">
        <h1 className='text-white text-center'>Password Generator</h1>

        <div className="flex shadow overflow-hidden mb-4 pb-8">

          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white rounded-l-lg'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-lg font-bold text-sm leading-4'
          >copy</button>

        </div>


        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1 pb-7'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 pb-7'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 pb-7'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="CharacterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

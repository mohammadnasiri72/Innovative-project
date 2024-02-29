// project 1
import { useState } from "react";
import "./style.css"

function Bob() {
  const [isFocusUserName , setIsFocusUserName] = useState(false)
  const [isFocusPassword , setIsFocusPassword] = useState(false)
  const [x , setX] = useState(0)
 
  const moveEyeTyping = (e)=>{
    if (e.target.textLength<20) {
      setX(e.target.textLength*2)
    }
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen main-box-bob">
        <div className="w-80 h-96 bg-[#fbf468] relative">
          <img className="w-40 h-48 mx-auto" src="./images/bobno.png" alt="" />
          <img className="absolute top-10 left-24 ml-3 w-10 h-10 duration-300" src="./images/eye.png" alt="" style={{transform:isFocusUserName?`translate(${x-20}% , 20%)`:isFocusPassword?`translate(0% , -20%)`:`translate(0% , 0%)`}}/>
          <img className="absolute top-10 left-40 ml-3 w-10 h-10 duration-300" src="./images/eye.png" alt="" style={{transform:isFocusUserName?`translate(${x-20}% , 20%)`:isFocusPassword?`translate(0% , -20%)`:`translate(0% , 0%)`}} />
          <form className="mt-7">
            <input className="bg-transparent outline-none border border-green-300 text-green-500 placeholder-current rounded-lg w-2/3 py-1 px-3" type="text" placeholder="username..." onFocus={()=>setIsFocusUserName(true)} onBlur={()=>setIsFocusUserName(false)} onChange={moveEyeTyping}/>
            <input className="bg-transparent outline-none border border-green-300 text-green-500 placeholder-current rounded-lg w-2/3 py-1 px-3 mt-3" type="password" placeholder="password..." onFocus={()=>setIsFocusPassword(true)} onBlur={()=>setIsFocusPassword(false)}/>
            <button className="bg-blue-500 rounded-md w-2/3 mt-3 p-1 text-white hover:bg-blue-800 duration-300">ورود</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Bob;
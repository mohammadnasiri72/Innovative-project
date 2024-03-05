import React from "react";

export default function PalletColor({setColor}) {
  return (
    <div className="h-[10vh] w-96 rounded-2xl hover:shadow-xl duration-300 border flex justify-center items-center">
      <button onClick={(e)=> setColor(e.target.value)} className="rounded-full w-5 h-5 mx-3 bg-red-500" value={'rgb(239 68 68)'}></button>
      <button onClick={(e)=> setColor(e.target.value)} className="rounded-full w-5 h-5 mx-3 bg-blue-500" value={'rgb(59 130 246)'}></button>
      <button onClick={(e)=> setColor(e.target.value)} className="rounded-full w-5 h-5 mx-3 bg-yellow-500" value={'rgb(234 179 8)'}></button>
      <button onClick={(e)=> setColor(e.target.value)} className="rounded-full w-5 h-5 mx-3 bg-green-500" value={'rgb(34 197 94)'}></button>
      <button onClick={(e)=> setColor(e.target.value)} className="rounded-full w-5 h-5 mx-3 bg-pink-600" value={'rgb(219 39 119)'}></button>
    </div>
  );
}

import React, { useState } from 'react'
import PalletColor from './palletColor'

export default function ThemeColor() {
    const [color , setColor] = useState('test2')
  return (
    <>
        <div className='h-screen flex justify-center items-center flex-col'>
            <div className='h-[70vh] w-96 mb-10 rounded-2xl hover:shadow-xl duration-300 border'>
                <div style={{backgroundColor:color}} className='h-[15vh] bg-blue-500 w-full flex justify-center rounded-t-2xl'>
                    <img className='rounded-full border-white border-4 translate-y-1/2' src={'./images/theme-color/1.jpg'} alt="" />
                </div>
                <div className='flex justify-center items-center flex-col mt-12 h-[15vh]'>
                    <h3 style={{color}} className='text-2xl text-blue-500'>Emily fisher</h3>
                    <p className='text-slate-400 font-semibold'>senior web developer</p>
                </div>
                <div className='flex justify-around items-center mt-3 h-[15vh]'>
                    <div className='flex justify-center items-center flex-col'>
                        <span className='font-semibold text-xl'>852</span>
                        <span style={{color}} className='font-semibold text-blue-500 text-xl'>Following</span>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <span className='font-semibold text-xl'>1.6k</span>
                        <span style={{color}} className='font-semibold text-blue-500 text-xl'>Followers</span>
                    </div>
                </div>
                <div className=' flex justify-around items-center h-[15vh]'>
                    <button style={{color , borderColor:color}} className='text-blue-500 bg-white border-2 border-blue-500 rounded-xl w-36 h-12 font-semibold'>Message</button>
                    <button style={{backgroundColor:color , borderColor:color}} className='text-white bg-blue-500 border-2 border-blue-500 rounded-xl w-36 h-12 font-semibold'>Follow</button>
                </div>
            </div>
            <PalletColor setColor={setColor}/>
        </div>
    </>
  )
}

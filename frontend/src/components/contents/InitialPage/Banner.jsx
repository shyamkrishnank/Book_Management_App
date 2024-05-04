import React from 'react'
import {Image} from "@nextui-org/react";


function Banner() {
  return (
    <div className='flex mt-12'>
        <div className='ml-6 basis-1/2'>
            <div className='flex flex-col w-full h-80 justify-center align-middle'>
                <div className='flex w-full justify-center'><h1 className='text-4xl font-bold shadow-sm'>"Books are uniquely portable magic." - Stephen King</h1></div>
                <div className='flex w-full justify-center mt-5'><p className='text-xl italic text-cyan-950'>Experience the magic of organizing, discovering, and sharing your favorite books with our intuitive book management app.</p></div>
            </div>

        </div>
        <div className='basis-1/2 flex justify-center'>
            <Image
            isBlurred
            width={250}
            alt="NextUI hero Image with delay"
            src="https://i.pinimg.com/564x/81/7c/7f/817c7f8750102738fa5ad44086ab10fb.jpg"
            /> 
        </div>
 
    </div>
  )
}

export default Banner

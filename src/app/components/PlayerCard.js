import React from 'react'

const PlayerCard = () => {
  return (
    <div className='w-full flex flex-col gap-4 bg-gradient-to-br from-purple-300 to-purple-700 p-4 rounded-3xl mt-32 '>
      <div className='flex gap-4'>
          <img className='w-[60px] rounded-2xl' src={"/cover.jpeg"} alt="" />
          <span className='flex flex-col  '>
            <p className='text-xl  text-white font-semibold tracking-wide'>Superman</p>
            <p className='text-sm text-zinc-300 font-semibold'>Eminem</p>
          </span>
      </div>

      <div className='flex justify-center items-center gap-4'>
        <span>
        <svg className='w-[24px] fill-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 7.766c0-1.554-1.696-2.515-3.029-1.715l-7.056 4.234c-1.295.777-1.295 2.653 0 3.43l7.056 4.234c1.333.8 3.029-.16 3.029-1.715V7.766zM9.944 12L17 7.766v8.468L9.944 12zM6 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z" /></svg>
        </span>
        <span className=' rounded-full p-1.5 bg-white'>
        <svg className='w-[20px] fill-purple-700' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg>
        </span>
        <span>
        <svg className='w-[24px] fill-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.766c0-1.554 1.696-2.515 3.029-1.715l7.056 4.234c1.295.777 1.295 2.653 0 3.43L8.03 17.949c-1.333.8-3.029-.16-3.029-1.715V7.766zM14.056 12L7 7.766v8.468L14.056 12zM18 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z" /></svg>
        </span>
      </div>
    </div>
  )
}

export default PlayerCard
import React from 'react'

const AdCard = () => {
  return (
    <div className=' flex bg-gradient-to-br from-purple-300 to-purple-600 px-5 rounded-3xl mt-[8px]'>
        <div className='flex flex-col gap-4 py-4'>
            <p className='text-xs text-white font-semibold'>FREEMIUM</p>
            <p className='text-[50px] leading-[42px] font-semibold text-white  '>Listen to <br />trending songs <br />all the time</p>
            <p className='text-xs text-white w-[350px]'>Lorem ipsum  sdasgdasyd astw hashs  sitlestias, aliquid doloribus nesciunt quae asperiores! Laborum, esse.</p>
            <div>
            <button className='bg-white text-xl font-semibold text-purple-400 rounded-2xl px-5 py-2'>Explore Now</button>
            </div>
        </div>

        <div className='absolute'>
            <img className='w-[450px] h-[298px] ml-[320px]' src={"/cardimg.png"} alt="" />
        </div>

    </div>
  )
}

export default AdCard
import React from 'react'

const TopArtist = () => {
  return (
    <div className='flex bg-zinc-50 rounded-xl mt-1 mb-2'>
            <img className='w-[60px] rounded-lg' src={"/artist1.jpeg"} alt="" />
        <div className='flex flex-col gap-2 px-5 mt-2'>
            <p className='text-black  text-md font-semibold'>Vanessa Cartlon</p>
            <span className='flex gap-10 text-[11px] text-zinc-400 '>
                <p>500M Followers</p>
                <p>100B Plays</p>
            </span>
        </div>
    </div>
  )
}

export default TopArtist
import React from 'react'

const TopArtist = () => {
  return (
    <div className='flex bg-zinc-100 rounded-xl mt-3 mb-4'>
            <img className='w-[60px] rounded-lg' src={"/artist1.jpeg"} alt="" />
        <div className='flex flex-col gap-2 px-5'>
            <p className='text-black  text-md font-semibold'>Justin Bieber</p>
            <span className='flex gap-10 text-[10px] text-zinc-400 '>
                <p>500M Followers</p>
                <p>100B Plays</p>
            </span>
        </div>
    </div>
  )
}

export default TopArtist
import React from 'react'
import PlayerCard from './PlayerCard'

const Sidebar = () => {
    return (
        <div className='w-[20%] px-4 py-6 fixed '>
            <div className='flex flex-col w-[100%] mt-5'>
                <div className='flex flex-col gap-1 '>
                    <img className='w-[70px] rounded-2xl' src={"/profile.jpeg"} alt="" />
                    <span className='text-white text-xl'>Ayush Bhatt</span>
                </div>

                <div className='flex flex-col my-5  '>
                    <p className='mb-3 text-white text-sm tracking-wider'>Menu</p>
                    <div className='flex '>
                        <div className=' w-full flex gap-6 items-center py-2'>
                            <svg className='w-[27px] fill-zinc-400' viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" ><path d='M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z' /></svg>
                            <p className='text-zinc-400 tracking-wider'>Explore</p>
                        </div>
                    </div>

                    <div className='flex '>
                        <div className=' w-full flex gap-6 items-center py-2'>
                        <svg className='w-[27px] fill-zinc-400 ' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z"/></svg> <p className='text-zinc-400 tracking-wider'>Genres</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className=' w-full flex gap-6 items-center py-2'>
                        <svg className='w-[27px] fill-zinc-400' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,2H7A1,1,0,0,0,6,3V4H3A1,1,0,0,0,2,5V19a1,1,0,0,0,1,1H6v1a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM4,18V6H6V18Zm16,2H8V4H20Zm-6-2.125a3,3,0,0,0,3-3V7.125a1,1,0,0,0-2,0v4.934a2.966,2.966,0,0,0-1-.184,3,3,0,0,0,0,6Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,14,13.875Z"/></svg> 
                        <p className='text-zinc-400 tracking-wider'>Albums</p>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col'>
                    <p className='mb-3 text-white text-sm tracking-wider'>Library</p>
                    <div className=' w-full flex gap-6 items-center py-2'>
                    <svg className='w-[27px] fill-zinc-400' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M12 4.528a6 6 0 0 0-8.243 8.715l6.829 6.828a2 2 0 0 0 2.828 0l6.829-6.828A6 6 0 0 0 12 4.528zm-1.172 1.644l.465.464a1 1 0 0 0 1.414 0l.465-.464a4 4 0 1 1 5.656 5.656L12 18.657l-6.828-6.829a4 4 0 0 1 5.656-5.656z" /></svg>
                    <p className='text-zinc-400 tracking-wider'>Favourites</p>
                    </div>

                    <div className=' w-full flex gap-6 items-center py-2'>
                    <svg className='w-[27px] fill-zinc-400' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M14.5 3H7.71l-.85-.85L6.51 2h-5l-.5.5v11l.5.5h13l.5-.5v-10L14.5 3zm-.51 8.49V13h-12V7h4.49l.35-.15.86-.86H14v1.5l-.01 4zm0-6.49h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14l-.01.99z"/></svg>
                    <p className='text-zinc-400 tracking-wider'>My Music</p>
                    </div>
                </div>
            </div>
            <div>
                <PlayerCard />
            </div>
        </div>
    )
}

export default Sidebar
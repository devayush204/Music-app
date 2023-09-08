import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between py-3 ">
          <p className="text-4xl font-bold">Home</p>
          <div className="flex gap-4">
            <div className="flex ">
              <input className="text-black bg-zinc-100 focus:outline-none rounded-3xl placeholder:text-zinc-700 pl-10 py-2" type="text" placeholder="Search your music" />
              <svg className="absolute w-[27px] fill-black ml-2 mt-1.5 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg>
            </div>
            <div className="flex justify-center">
              <svg className="w-[27px]" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M13.377 10.573a7.63 7.63 0 0 1-.383-2.38V6.195a5.115 5.115 0 0 0-1.268-3.446 5.138 5.138 0 0 0-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 0 0-1.208 1.675 5.067 5.067 0 0 0-.431 2.022v2.2a7.61 7.61 0 0 1-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 0 1-.705.299.997.997 0 0 1-.706-.3.997.997 0 0 1-.3-.705h1.999a.939.939 0 0 1-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 0 0 .443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 0 1 2.597 1.4 4.133 4.133 0 0 1 1.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z" /></svg>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
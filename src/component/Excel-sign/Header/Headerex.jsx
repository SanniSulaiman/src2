import React from 'react'
import ty from "../../images/sail.png.png"

const Headerex = () => {
  return (
    <header>
      <nav className='bg-[yellow] w-[100%] h-[5rem] p-[20px] pl-[5rem] flex'>
       <img src={ty} alt="" className='w-[8rem]  h-[3.2rem] bg-[]'/>
       <button className='ml-[55em] text-[black] bg-[white] w-[5rem] rounded font-semibold'>Sign in</button>
      </nav>
    </header>
  )
}

export default Headerex
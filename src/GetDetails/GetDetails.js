import React, { useEffect, useState } from 'react'

const GetDetails = () => {

  return (
    <>

    <div className='mx-20 h-[100vh] flex items-center justify-center'>
        <div className='h-[20rem]  bg-gray-200 rounded-3xl flex justify-center items-center'>
        <form method='post' className='flex flex-col *:m-4' action='/GetDetails'>
            <div className='*:m-2'>
            <label for="AreaName">Enter Area Name</label>
            <input className='border border-black' type='text' name='AreaName'></input>
            </div>
           <div className='text-center'>
           <button type='submit ' className='m-2 rounded-lg p-2 bg-blue-400'>Get Details</button>
           </div>



         </form>

        </div>
       


    </div>


    <div>

    </div>
    </>
    
  )
}

export default GetDetails
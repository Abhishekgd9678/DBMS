import React from 'react'
import one from "../../images/1.jpg"
import two from "../../images/2.jpg"

const Creators = () => {
  return (
    <div className='creators'>
        <div className=''>
            <h4>Who Are We ? </h4>
        </div>
        <div className='flex mx-10 justify-evenly'>
            <div className='w-1/2'>
                    <div>
                        <img className='w-[40%]  rounded-3xl' src={one}/>
                    </div>
                    <div>

                    </div>
            </div>
            <div className='w-1/2'>
                <div>
                <img className='w-[40%]  rounded-3xl' src={two}/>
                </div>
                <div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Creators
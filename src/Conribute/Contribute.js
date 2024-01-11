import React from 'react'

const Contribute = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
        <div className='h-[40rem]'>
            <form>
                <div>
                    <label for="UserName">Enter Your Name</label>
                    <input className='border border-black' type='text' name='UserName'></input>
                </div>
                <div>
                  <label for="Plant-Name">Enter Plant Name</label>
                  <input type='text' className='border border-black' name="Plant-name"></input>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contribute
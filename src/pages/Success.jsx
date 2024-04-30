import React, { useEffect, useState } from 'react'
import successGif from '../assets/success.gif'
import { PropagateLoader } from 'react-spinners'
const Success = () => {

  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3000);
  }, [])
  

  return (
    <div className='flex justify-center items-center  h-screen'>

      {
        loading ? <PropagateLoader color="#36d7b7" /> :  <img src={successGif} alt="" />
      }
      
    
    </div>
  )
}

export default Success
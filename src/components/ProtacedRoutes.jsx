import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const ProtacedRoutes = ({element}) => {
    
    const cart = useSelector((state) => state.cart.cart)
    return (
        <div>
            {cart.length > 0? element : <Navigate to='/'/> }
        </div>
    )
  
}

export default ProtacedRoutes
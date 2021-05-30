import React from 'react'
import { Link } from 'react-router-dom'

 const Title = ({title , subtitle }) => {
    
    return (
        <div className="text-center">
            <h1 >{title}</h1>
            <h3 >{subtitle}</h3>
            
        </div>
    )
}
 export default Title
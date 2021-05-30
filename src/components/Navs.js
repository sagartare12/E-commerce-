import React from 'react'
import {Link } from 'react-router-dom'


 const Navs = () => {


    const LINKS = [
        {to: '/keyboard' , text:'Keyboards'},
        {to: '/mouse' , text: 'Headphones'}
    ];

    
    return (
        <div className="text-center">
            <nav>
                {LINKS.map( ( item ) =>
                <li key={item.to} ><Link to ={item.to}>{item.text}</Link></li> )}
            </nav>
        </div>
    )
}
 export default Navs
import React from 'react'
import MainPageLeyout from '../components/MainPageLeyout'
import Navs from '../components/Navs'
import Products from '../context/products'
import { KeyboardGrid } from './Keyboard/KeyboardGrid'

 const Home = () => {
    return (
        <div>
            <MainPageLeyout />
            <Navs />
        </div>
    )
}
export default Home
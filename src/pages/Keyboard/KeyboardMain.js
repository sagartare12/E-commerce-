import React from 'react'
import MainPageLeyout from '../../components/MainPageLeyout'
import { Checkout } from '../Checkout'
import SideNav from '../SideNav'
import { Card } from './Card'
import { ChangeKeyboard } from './ChangeKeyboard'
import { KeyboardGrid } from './KeyboardGrid'
import { NewCard } from './NewCard'

export const KeyboardMain = () => {
    return (
        <div>
            <MainPageLeyout/>
            <NewCard />      
        </div>
    )
}

import React from 'react'
import {Provider} from "react-redux"


import store from '../store/store'
import { RouterApp } from './RouterApp'
export const MainApp = () => {
    return (
        <Provider store= {store}> 

            <RouterApp />
            
        </Provider>
    )
}

import React from 'react'
import { CounterComponent } from './CounterComponent'
import {Provider} from "react-redux"
import store from '../store/store'
export const CounterApp = () => {
    return (
        <Provider store= {store}> 

            <CounterComponent />
            
        </Provider>
    )
}

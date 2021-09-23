import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementAsyncCounter, resetCounter as reset } from '../actions/counter';

export const CounterComponent = () => {
    const data = useSelector(store => store);
    const {counter} = data;
    const dispatch =  useDispatch();
    const handlerIncrementCounter = () => {
        dispatch(incrementAsyncCounter(1));
    }
    const handlerDecrementCounter = () => {
        dispatch(decrementCounter(1));
    }
    const resetCounter = () => {
        dispatch(reset(0));
    }
    return (
        <div>
            {counter}
            <button onClick={handlerIncrementCounter}>
                +1
            </button>
            <button onClick={handlerDecrementCounter}>
                -1
            </button>
            <button onClick={resetCounter}>
                reset
            </button>
        </div>
    )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiAsync } from '../actions/api';
import { decrementCounter, incrementAsyncCounter, incrementCounter, resetCounter as reset } from '../actions/counter';

export const CounterComponent = () => {
    const data = useSelector(store => store);
    const {counter, dataApi} = data;
    const {img, name, nickname} = dataApi;
    const dispatch =  useDispatch();
    useEffect(() => {
        dispatch(apiAsync(counter))
    }, [counter]);
    const handlerIncrementCounter = () => {
        dispatch(incrementCounter(1));
    }
    const handlerDecrementCounter = () => {
        dispatch(decrementCounter(1));
    }
    const resetCounter = () => {
        dispatch(reset(0));
    }
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col">
                    <button className="btn btn-primary" onClick={handlerIncrementCounter}>
                        +1
                    </button>
                </div>
                <div className="col">
                    <img src={img} width="400"/>
                    <span>{name}</span>q
                </div>
                <div className="col">
                    <button className="btn btn-danger" onClick={handlerDecrementCounter}>
                        -1
                    </button>
                </div>
               
                
                
            </div>
        </div>
    )
}

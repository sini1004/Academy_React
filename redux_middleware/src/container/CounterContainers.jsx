import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter'
import { increase, decrease } from "../modules/counter" 

const CounterContainers = () => {
  const number = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase)
  }
  const onDecrease = () => {
    dispatch(decrease)
  }

  return
  <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
}

export default CounterContainers;
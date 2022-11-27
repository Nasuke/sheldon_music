import { configureStore } from '@reduxjs/toolkit'
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import counter from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counter
  }
})

/**
 * useSelector中的state就相当于store.getState()
 * 我们需要的state类型是store.getState这个函数的返回值
 * TypedUseSelectorHook是函数签名的用法<>中传入state的类型
 * selector: (state: TState) => TSelected 中TSelected有state类型的返回值类型推导得出
 */
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type Dispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => Dispatch = useDispatch
export const shallowEqualApp = shallowEqual

export default store

import { configureStore } from '@reduxjs/toolkit'
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import recommendReducer from '@/views/Discovery/c-views/Recommand/store/rec'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

/**
 * useSelector中的state就相当于store.getState()
 * 我们需要的state类型是store.getState这个函数的返回值
 * TypedUseSelectorHook是函数签名的用法<>中传入state的类型
 * selector: (state: TState) => TSelected 中TSelected有state类型的返回值类型推导得出
 */

// const state = store.getState()
// type IRootState = typeof state
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type Dispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => Dispatch = useDispatch
export const shallowEqualApp = shallowEqual

export default store

import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    msg: 'hello'
  },
  reducers: {
    changeMsgAction(state, { payload }) {
      state.msg = payload
    }
  }
})
export const { changeMsgAction } = counterSlice.actions
export default counterSlice.reducer

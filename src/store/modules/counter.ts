import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    msg: 'hello'
  },
  reducers: {
    changeMsgAction(state, { payload }: PayloadAction<string> ) {
      state.msg = payload
    }
  }
})
export const { changeMsgAction } = counterSlice.actions
export default counterSlice.reducer

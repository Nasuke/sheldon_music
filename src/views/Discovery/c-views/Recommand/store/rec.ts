
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getBanner } from '../service/rec'

interface IBanner {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
}
interface IRecommendState {
  banners: IBanner[]
}

// 发送异步请求
export const fetchBannerDataAction = createAsyncThunk("banners", async (arg, {dispatch}) => {
  const res = await getBanner()
  dispatch(changeBannerAction(res.banners))
})

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const {changeBannerAction} = recommendSlice.actions
export default recommendSlice.reducer


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getBanner, getHotRecommend } from '../service/rec';

interface IBanner {
  imageUrl: string
  targetId: number
  typeTitle: string
  url: string
}
interface IHot {
  id: number
  type: number
  name: string
  picUrl: string
  playCount: number
}
interface IRecommendState {
  banners: IBanner[],
  hotRecommend: IHot[]
}

// 发送异步请求
export const fetchBannerDataAction = createAsyncThunk("banners", async (arg, {dispatch}) => {
  const res = await getBanner()
  dispatch(changeBannerAction(res.banners))
})
export const fetchHotRecommendAction = createAsyncThunk("hotRecommend", async (arg, { dispatch }) => {
  const res = await getHotRecommend(8)
  dispatch(changeHotRecommendAction(res.result))
})

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    }
  }
})

export const {changeBannerAction, changeHotRecommendAction} = recommendSlice.actions
export default recommendSlice.reducer

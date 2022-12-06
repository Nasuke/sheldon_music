
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getBanner, getHotRecommend, getNewAlbum, getPlayList } from '../service/rec';

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
  hotRecommend: IHot[],
  newAlbum: any[],
  rankings: any[]
}
const rankingIds = [19723756, 3779629, 2884035]
// 发送异步请求
export const fetchBannerDataAction = createAsyncThunk("banners", async (arg, { dispatch }) => {
  const res = await getBanner()
  dispatch(changeBannerAction(res.banners))
})
export const fetchHotRecommendAction = createAsyncThunk("hotRecommend", async (arg, { dispatch }) => {
  const res = await getHotRecommend(8)
  dispatch(changeHotRecommendAction(res.result))
})
export const fetchNewAlbumAction = createAsyncThunk("newAlbum", async (arg, { dispatch }) => {
  const res = await getNewAlbum()
  dispatch(changeNewAlbumAction(res.albums))
})
export const fetchRankingAction = createAsyncThunk("rankings",
  (_, { dispatch }) => {
  // 管理方式
    // 1.分开管理 三个榜单分别对应三个state 发送三次请求 并且在switch中谁先到就会先dispatch 也不会相互影响

    // for (const id of rankingIds) {
    //   getPlayList(id).then(res => {
    //     switch (id) {
    //       case 19723756:
    //         dispatch()
    //         break;
    //   })
    // }

    // 2.统一管理 因为用户不会先看到这部分所以可以三个结果都拿到以后放在一个数组中管理
      // 2.1 或许所有结果后再dispatch
      // 2.2 为了保证顺序 使用Promise.all
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlayList(id))
    }
    Promise.all(promises).then(res => {
      const playlists = res.map(item => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })

  }
)


const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  rankings: []
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    }
  }
})

export const { changeBannerAction, changeHotRecommendAction, changeNewAlbumAction, changeRankingsAction } = recommendSlice.actions
export default recommendSlice.reducer

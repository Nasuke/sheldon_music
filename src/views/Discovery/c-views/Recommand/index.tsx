import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from "react"

import RecBanner from './c-cpns/rec-banner'
import { useAppDispatch } from '@/store/index'
import { fetchBannerDataAction, fetchHotRecommendAction, fetchNewAlbumAction, fetchRankingAction } from './store/rec';
import { RecommendWrapper, RecommendSection, RecommendLeft, RecommendRight } from './style';
import RecHot from './c-cpns/rec-hot';
import RecAlbum from './c-cpns/rec-album';
import RecRanking from './c-cpns/rec-ranking';

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchRankingAction())
  },[])


  return (
    <RecommendWrapper>
      <RecBanner></RecBanner>
      <RecommendSection>
        <RecommendLeft>
          <RecHot></RecHot>
          <RecAlbum></RecAlbum>
          <RecRanking></RecRanking>
        </RecommendLeft>
        <RecommendRight>right</RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)

import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from "react"

import RecBanner from './c-cpns/rec-banner'
import { useAppDispatch } from '@/store/index'
import { fetchBannerDataAction, fetchHotRecommendAction } from './store/rec';
import { RecommendWrapper, RecommendSection, RecommendLeft, RecommendRight } from './style';
import RecHot from './c-cpns/rec-hot';

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
  },[])


  return (
    <RecommendWrapper>
      <RecBanner></RecBanner>
      <RecommendSection>
        <RecommendLeft>
          <RecHot></RecHot>
        </RecommendLeft>
        <RecommendRight>right</RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)

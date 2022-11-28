import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from "react"

import { BannerWrapper } from './style'
import { useAppSelector, shallowEqualApp } from '@/store'

interface IProps {
  children?: ReactNode
}

const RecBanner: FC<IProps> = () => {

  const { banners } = useAppSelector((state) => ({
    banners: state.recommend.banners
  }),shallowEqualApp)

  

  return (
    <BannerWrapper>
      {
        banners.length > 0 && banners.map(item => {
          return (
            <div key={item.imageUrl}>{item.imageUrl}</div>
          )
        })
      }
    </BannerWrapper>
  )
}

export default memo(RecBanner)

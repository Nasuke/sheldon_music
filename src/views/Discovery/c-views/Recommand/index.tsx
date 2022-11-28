import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from "react"

import RecBanner from './c-cpns/rec-banner'
import { useAppDispatch } from '@/store/index'
import { fetchBannerDataAction } from './store/rec'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  },[])


  return (
    <div>
      <RecBanner></RecBanner>
    </div>
  )
}

export default memo(Recommend)

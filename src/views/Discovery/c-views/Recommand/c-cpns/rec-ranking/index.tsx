import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import { RankWrapper } from './style';
import SectionHeaderV1 from '@/components/section-header-v1';

interface IProps {
  children?: ReactNode
}

const RecRanking: FC<IProps> = () => {
  return (
    <RankWrapper>
      <SectionHeaderV1 title="榜单" moreLink='/discover/ranking'></SectionHeaderV1>
      <div className="content"></div>
    </RankWrapper>
  )
}

export default memo(RecRanking)

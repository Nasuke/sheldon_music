import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

import { HotWrapper } from './style';
import SectionHeaderV1 from '@/components/section-header-v1';
import { useAppSelector, shallowEqualApp } from '../../../../../../store/index';
import { isEmptyO } from '../../../../../../utils/is-empty-object';
import SectionItemV1 from '@/components/section-item-v1';

interface IProps {
  children?: ReactNode
}

const RecHot: FC<IProps> = () => {

  const { hotRecommend } = useAppSelector(state => ({
    hotRecommend: state.recommend.hotRecommend
  }), shallowEqualApp)

  return (
    <HotWrapper>
      <SectionHeaderV1
        title='热门推荐'
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discovery/songs"
      ></SectionHeaderV1>

      <div className="hot-recommend">
        {
          isEmptyO(hotRecommend) && (
            hotRecommend.map(item => {
              return (
                <SectionItemV1 key={item.name} itemData={item}></SectionItemV1>
              )
            })
          )
        }
      </div>

    </HotWrapper>
  )
}

export default memo(RecHot)

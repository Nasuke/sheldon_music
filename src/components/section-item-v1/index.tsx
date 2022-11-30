import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import { ItemV1Wrapper } from './style';
import { formatCount, formatImgSize } from '../../utils/format';

interface IHot {
  id: number
  type: number
  name: string
  picUrl: string
  playCount: number
}

interface IProps {
  children?: ReactNode,
  itemData: IHot
}

const SectionItemV1: FC<IProps> = (props) => {

  // 获取父组件传来的数据
  const { itemData } = props

  return (
    <ItemV1Wrapper>
      <div className="top">
        <img src={formatImgSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </ItemV1Wrapper>
  )
}

export default memo(SectionItemV1)

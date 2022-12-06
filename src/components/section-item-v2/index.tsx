import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import { ItemV2Wrapper } from './style';
import { formatImgSize } from '../../utils/format';

interface Artist {
  name: string
}
interface IProps {
  children?: ReactNode
  itemData: {
    name: string
    picUrl: string
    artist: Artist
  }
}

const SectionItemV2: FC<IProps> = (props) => {

  const { itemData } = props

  return (
    <ItemV2Wrapper>
      <div className="album-image">
        <img src={formatImgSize(itemData.picUrl, 120)} alt="" />
        <a className="cover sprite_cover">{itemData.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </ItemV2Wrapper>
  )
}

export default memo(SectionItemV2)

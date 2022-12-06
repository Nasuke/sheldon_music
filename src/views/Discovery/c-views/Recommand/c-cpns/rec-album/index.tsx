import React, { memo, useRef } from 'react';
import type { FC, ReactNode, ElementRef } from "react"

import { Carousel } from 'antd';

import { AlbumWrapper } from './style';
import SectionHeaderV1 from '@/components/section-header-v1';
import { useAppSelector, shallowEqualApp } from '../../../../../../store/index';
import SectionItemV2 from '@/components/section-item-v2';

interface IProps {
  children?: ReactNode
}

const RecAlbum: FC<IProps> = () => {

  // 获取Carousel实例
  const albumRef = useRef<ElementRef<typeof Carousel>>(null)

  // 获取store中数据
  const { newAlbum } = useAppSelector(state => ({
    newAlbum: state.recommend.newAlbum
  }), shallowEqualApp)

  // 处理函数



  return (
    <AlbumWrapper>
      <SectionHeaderV1 title='新碟上架'></SectionHeaderV1>
      <div className="content">
        <div className="arrow left sprite_02" onClick={() => albumRef.current?.prev()}></div>
        <div className="roll-list">
          <Carousel
            ref={albumRef}
            slidesToShow={5}
            slidesToScroll={5}
          >
            {
              newAlbum?.map(item => {
                return (
                  <SectionItemV2 itemData={item} key={item.picUrl}></SectionItemV2>
                )
              })
            }
          </Carousel>
        </div>
        <div className="arrow right sprite_02" onClick={() => albumRef.current?.next()}></div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(RecAlbum)

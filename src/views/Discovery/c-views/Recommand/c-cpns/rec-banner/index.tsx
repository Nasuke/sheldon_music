import React, { memo, useRef, useState } from 'react';
import type { FC, ReactNode, ElementRef } from "react"

import { Carousel } from 'antd';
import classNames from 'classnames';

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { useAppSelector, shallowEqualApp } from '@/store'
import { isEmptyO } from '../../../../../../utils/is-empty-object';


interface IProps {
  children?: ReactNode
}

const RecBanner: FC<IProps> = () => {

  // 定义内部数据
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // store中获取数据
  const { banners } = useAppSelector((state) => ({
    banners: state.recommend.banners
  }), shallowEqualApp)


  // 处理函数
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  // 获取背景图片
  let bgImageUrl = banners[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl += '?imageView&blur=40x20'
  }



  return (
    <BannerWrapper style={{
      background: `url(${bgImageUrl}) center center / 6000px`
    }}>
      {
        isEmptyO(banners) && (
          <div className="content">
            <BannerLeft>
              <Carousel
                autoplay
                effect="fade"
                afterChange={handleAfterChange}
                ref={bannerRef}
                dots={false}
              >
                {
                  banners.map(item => {
                    return (
                      <div className="item" key={item.imageUrl}>
                        <img src={item.imageUrl} alt={item.typeTitle} className="image" />
                      </div>
                    )
                  })
                }
              </Carousel>
              <ul className="dots">
                {
                  banners.map((item, index) => {
                    return (
                      <li key={item.imageUrl}>
                        <span className={classNames('item', { active: index === currentIndex })}></span>
                      </li>
                    )
                  })
                }
              </ul>
            </BannerLeft>
            <BannerRight>
            </BannerRight>
            {/* 按钮区域 */}
            <BannerControl>
              <div className="btn left" onClick={e => bannerRef.current?.prev()}></div>
              <div className="btn right" onClick={e => bannerRef.current?.next()}></div>
            </BannerControl>
          </div>
        )
      }
    </BannerWrapper>
  )
}

export default memo(RecBanner)

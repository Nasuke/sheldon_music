import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import { NavLink } from 'react-router-dom';

import { Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

import { HeadLeft, HeadRight, HeadWrapper } from './style'
import headTitles from '@/assets/data/header_titles.json';


interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  // 对a与NavLink的处理
  function showItem(item: any) {
    if (item.type === 'path') {
      return <NavLink to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }

  return (
    <HeadWrapper>
      <div className="content">
        <HeadLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title_list">
            {
              headTitles.map((item) => {
                return (
                  <div className="item" key={item.title}>
                    {showItem(item)}
                  </div>
                )
              })
            }
          </div>
        </HeadLeft>
        <HeadRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined  />} />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeadRight>
      </div>
      <div className="divider"></div>
    </HeadWrapper>
  )
}

export default memo(AppHeader)

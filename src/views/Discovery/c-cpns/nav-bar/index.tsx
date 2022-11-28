import React, { memo } from 'react';
import type { FC, ReactNode } from "react"
import { NavLink } from 'react-router-dom'

import { discoveryNav } from '@/assets/data/local_data'
import { NavWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav">
        {
          discoveryNav.map(item => {
            return (
              <div className="item" key="item.link">
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })
        }
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)

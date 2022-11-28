import React, { FC, memo, Suspense} from 'react'
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './c-cpns/nav-bar';

interface IProp {
  name?: string,
  age?: number,
  height?: number,
  children?: ReactNode
}

const Discover: FC<IProp> = () => {

  return (
    <div>
      <NavBar></NavBar>
      {/* 二级路由也用suspense包裹 防止闪烁*/}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)

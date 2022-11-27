import React, { FC, memo, Suspense } from 'react'
import type { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { shallowEqual} from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/store';
import { changeMsgAction } from '@/store/modules/counter';

interface IProp {
  name?: string,
  age?: number,
  height?: number,
  children?: ReactNode
}

const Discover: FC<IProp> = () => {

  const state = useAppSelector(state => ({
    count: state.counter.count,
    msg: state.counter.msg
  }), shallowEqual)

  const dispatch = useAppDispatch()
  function handleClick() {
    dispatch(changeMsgAction('yaho'))
  }


  return (
    <div>
      <div className="nav">
        <Link to="/discovery/recommand">推荐</Link>
        <Link to="/discovery/ranking">排行榜</Link>
        <Link to="/discovery/songs">歌单</Link>
        <Link to="/discovery/djradio">主播电台</Link>
        <Link to="/discovery/artist">歌手</Link>
        <Link to="/discovery/album">新碟上架</Link>
      </div>
      <div>
        count: {state.count}
        <p>
          msg: { state.msg}
        </p>
      </div>
      <button onClick={handleClick}>change</button>
      {/* 二级路由也用suspense包裹 方法闪烁*/}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

Discover.defaultProps = {
  name: 'sheldon',
  age: 40,
}

export default memo(Discover)

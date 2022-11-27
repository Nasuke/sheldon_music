import React, { memo, Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom';

import routes from '@/router';


export default memo(function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discovery">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="Loading...">
        <div className="root">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
})


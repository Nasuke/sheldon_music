import React, { memo, Suspense} from 'react'
import { useRoutes } from 'react-router-dom';

import routes from '@/router';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';



export default memo(function App() {

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="Loading...">
        <div className="root">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
})


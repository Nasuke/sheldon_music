import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom'

const Discovery = lazy(() => import('@/views/Discovery'))
const Album = lazy(() => import('@/views/Discovery/c-views/Album'))
const Artist = lazy(() => import('@/views/Discovery/c-views/Artist'))
const Djradio = lazy(() => import('@/views/Discovery/c-views/Djradio'))
const Ranking = lazy(() => import('@/views/Discovery/c-views/Ranking'))
const Recommand = lazy(() => import('@/views/Discovery/c-views/Recommand'))
const Songs = lazy(() => import('@/views/Discovery/c-views/Songs'))

const Download = lazy(() => import('@/views/Download'))
const Focus = lazy(() => import('@/views/Focus'))
const Mine = lazy(() => import('@/views/Mine'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discovery" />
  },
  {
    path: '/discovery',
    element: <Discovery />,
    children: [
      {
        path: '/discovery',
        element: <Navigate to="/discovery/recommand" />
      },
      {
        path: '/discovery/album',
        element: <Album />
      },
      {
        path: '/discovery/artist',
        element: <Artist />
      },
      {
        path: '/discovery/djradio',
        element: <Djradio />
      },
      {
        path: '/discovery/ranking',
        element: <Ranking />
      },
      {
        path: '/discovery/recommand',
        element: <Recommand />
      },
      {
        path: '/discovery/songs',
        element: <Songs />
      },
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
]

export default routes

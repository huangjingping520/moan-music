import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('~/views/discover'))

const Album = lazy(() => import('~/views/discover/album'))
const Artist = lazy(() => import('~/views/discover/artist'))
const Djradio = lazy(() => import('~/views/discover/djradio'))
const Rank = lazy(() => import('~/views/discover/rank'))
const Recommend = lazy(() => import('~/views/discover/recommend'))
const Songs = lazy(() => import('~/views/discover/songs'))

const Download = lazy(() => import('~/views/download'))
const Focus = lazy(() => import('~/views/focus'))
const Mine = lazy(() => import('~/views/mine'))

const routes: RouteObject[] = [
  {
    path:'/',
    element: <Navigate to='/discover/recommend' />
  },
  {
    path:'/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/rank',
        element: <Rank />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },{
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path:'/download',
    element: <Download />
  },
  {
    path:'/focus',
    element: <Focus />
  },
  {
    path:'/mine',
    element: <Mine />
  }
]

export default routes

import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { shallowEqual, useDispatch } from 'react-redux'
import { useAppSelector } from './store'
import routes from './router'
import { changeMessage } from './store/modules/counter'

function App() {
  const { count,message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  function handleChangeMessage() {
    dispatch(changeMessage('Hello Merlin'))
  }

  return (
    <div className="App">
      <div className='nav'>
        <Link to='/discover'>发现音乐</Link>
        <Link to='/mine'>我的音乐</Link>
        <Link to='/focus'>关注</Link>
        <Link to='/download'>下载客户端</Link>
      </div>
      <h2>当前计数： {count}</h2>
      <h2>当前信息： {message}</h2>
      <button onClick={handleChangeMessage}>change Message </button>
      <Suspense fallback='loading'>
        <div className="main">{ useRoutes(routes) }</div>
      </Suspense>
    </div>
  )
}

export default App

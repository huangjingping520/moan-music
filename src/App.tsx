import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
// import { shallowEqual, useDispatch } from 'react-redux'
// import { useAppSelector } from './store'
import routes from './router'
// import { changeMessage } from './store/modules/counter'

function App() {
  // const { count,message } = useAppSelector(
  //   (state) => ({
  //     count: state.counter.count,
  //     message: state.counter.message
  //   }),
  //   shallowEqual
  // )

  // const dispatch = useDispatch()

  // function handleChangeMessage() {
  //   dispatch(changeMessage('Hello Merlin'))
  // }

  return (
    <div className="App">
      <Header />
      <Suspense fallback='loading'>
        <div className="main">{ useRoutes(routes) }</div>
      </Suspense>
      <Footer />
      {/* <h2>当前计数： {count}</h2>
      <h2>当前信息： {message}</h2>
      <button onClick={handleChangeMessage}>change Message </button> */}
    </div>
  )
}

export default App

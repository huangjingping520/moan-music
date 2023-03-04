import React, { useEffect } from 'react'
import maRequest from '~/service'

const Recommend = () => {
  useEffect(() => {
    maRequest
      .get({
        url:'/banner'
      }).then(res => {
        console.log(res)
      })
  },[])

  return (
    <div>Recommend</div>
  )
}

export default Recommend

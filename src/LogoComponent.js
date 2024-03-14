import React from 'react'

const LogoComponent = () => {
  return (
    <h1 style={{fontSize: 'calc(30px* var(--dynamic-font-scale, 1))', color: 'rgb(185, 43, 39)', fontWeight: 'bolder', fontFamily: 'Century', marginTop: '15px'}}>
        Quora
    </h1>
  )
}

export default LogoComponent
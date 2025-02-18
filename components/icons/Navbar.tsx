import React from 'react'
import Svg, { Line } from 'react-native-svg'

const Navbar = () => {
  return (
    <Svg width="24" height="17" viewBox="0 0 24 17" fill="none">
      <Line y1="1.5" x2="24" y2="1.5" stroke="black" stroke-width="3"/>
      <Line x1="8" y1="8.5" x2="24" y2="8.5" stroke="black" stroke-width="3"/>
      <Line x1="16" y1="15.5" x2="24" y2="15.5" stroke="black" stroke-width="3"/>
    </Svg>
  )
}

export default Navbar
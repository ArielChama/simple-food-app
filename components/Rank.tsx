import React from 'react'
import { View } from 'react-native'
import Star from './icons/Star'
import HalfStar from './icons/HalfStar'

const Rank = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Star />
      <Star />
      <Star />
      <Star />
      <HalfStar />
    </View>
  )
}

export default Rank
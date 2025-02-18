import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const Category = () => {
	const { name } = useLocalSearchParams()

	

  return (
    <div>Category</div>
  )
}

export default Category
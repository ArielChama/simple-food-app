import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

interface CardProps {
  children: ReactNode
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9FFF6',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20
  }
})

const Card = ({ children }: CardProps) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card
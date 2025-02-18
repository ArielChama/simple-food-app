import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Search from './icons/Search'

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20
  },
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

const Menu = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 16 }}>Good moring, Jeev jobs</Text>

      <View style={styles.input}>
        <TextInput placeholder="What you wanna order today ?.." />
        <Search />
      </View>
    </View>
  )
}

export default Menu
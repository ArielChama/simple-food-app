import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Search from './icons/Search'
import Navbar from './icons/Navbar'
import { Link, useNavigation, usePathname } from 'expo-router'
import HomeIcon from './icons/HomeIcon'
import BackArrow from './icons/BackArrow'

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
  const pathname = usePathname()
  const navigation = useNavigation()

  if (pathname == '/screens/home' || pathname.startsWith('/screens/category/')) {
    return (
      <View style={{ marginTop: 20 }}>
        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <View>
            <Text style={{ fontSize: 16 }}>Good moring, <Text style={{ fontWeight: "bold" }}>Jeev jobs</Text></Text>
          </View>
          
          <Navbar />
        </View>
  
        <View style={styles.input}>
          <TextInput placeholder="What you wanna order today ?.." />
          <Search />
        </View>
      </View>
    )
  }
  return (
    <View style={{ marginVertical: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Pressable onPress={() => navigation.goBack()}>
        <BackArrow />
      </Pressable>

      <Link href="/screens/home">
        <HomeIcon />
      </Link>
    </View>
  )
}

export default Menu
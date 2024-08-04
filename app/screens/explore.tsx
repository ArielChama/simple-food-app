import Container from '@/components/Container'
import Menu from '@/components/Menu'
import Rank from '@/components/Rank'
import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

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

const foods = [
  {
    name: 'Hotdog',
    description: 'The term hot dog can also refer to the sausage itself.',
    cover: require('@/assets/images/HotDog.png')
  },
  {
    name: 'Burger',
    description: 'The term hot dog can also refer to the sausage itself.',
    cover: require('@/assets/images/Burger.png')
  },
  {
    name: 'Chips',
    description: 'The term hot dog can also refer to the sausage itself.',
    cover: require('@/assets/images/FriesFront.png')
  },
]

const Explore = () => {
  return (
    <Container>
      <Menu />
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#FABB2D" }}>Categories</Text>

        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 40 }}>
          <View style={{ backgroundColor: '#FABB2D', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 30 }}>
            <Text>All</Text>
          </View>

          <View style={{ backgroundColor: '#EA574F', width: 130, height: 83, borderRadius: 20 }}>
            <Image source={require('@/assets/images/box_donut.png')} style={{ width: 121, height: 121, position: 'absolute', top: -60 }} />
          </View>

          <View style={{ backgroundColor: '#3AA856', width: 130, height: 83, borderRadius: 20 }}>
            <Image source={require('@/assets/images/Burger.png')} style={{ width: 121, height: 121, position: 'absolute', top: -60 }} />
          </View>
        </View>
      </View>

      <View style={{ paddingVertical: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Popular</Text>

        <View style={{ paddingTop: 30 }}>
          {foods.map(({ name, description, cover }) => (
            <View style={styles.card} key={name}>
              <View style={{ width: '60%' }}>
                <Link href={`/screens/category/${name}`}>
                  <Text style={{ fontSize: 27 }}>{name}</Text></Link>
                <Rank />

                <Text style={{ marginTop: 20 }}>
                  {description}
                </Text>
              </View>

              <Image source={cover} style={{ width: 120, height: 120 }} />
            </View>
          ))}
        </View>
      </View>
    </Container>
  )
}

export default Explore
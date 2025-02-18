import Card from '@/components/Card'
import Container from '@/components/Container'
import Foods from '@/components/Foods'
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
})

const Home = () => {
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
          {Foods.map(({ name, description, cover }) => (
            <Card key={name}>
              <View style={{ width: '60%' }}>
                <Link href={`/screens/product/${name}`}>
                  <Text style={{ fontSize: 27 }}>{name}</Text></Link>
                <Rank />

                <Text style={{ marginTop: 20 }}>
                  {description}
                </Text>
              </View>

              <Image source={cover} style={{ width: 120, height: 120 }} />
            </Card>
          ))}
        </View>
      </View>
    </Container>
  )
}

export default Home
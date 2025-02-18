import React from 'react'
import Card from '@/components/Card'
import Container from '@/components/Container'
import { Categories, Foods } from '@/components/Foods'
import Menu from '@/components/Menu'
import Rank from '@/components/Rank'
import { Link } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  
})

const Explore = () => {
  const populars = Foods.filter(food => food.stars >= 4)

  return (
    <Container>
      <Menu />
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#FABB2D" }}>Categories</Text>

        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 40 }}>
          <View style={{ backgroundColor: '#FABB2D', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 30 }}>
            <Text>All</Text>
          </View>

          {Categories.map(({ name, cover }) => (
            <View key={name} style={{ backgroundColor: '#EA574F', width: 130, height: 83, borderRadius: 20 }}>
              <Image source={cover} style={{ width: 121, height: 121, position: 'absolute', top: -60 }} />
            </View>
          ))}
        </View>
      </View>

      <View style={{ paddingVertical: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Popular</Text>

        <View style={{ paddingTop: 30 }}>
          {populars.map(({ id, name, description, cover }) => (
            <Card key={id}>
              <View style={{ width: '60%' }}>
                <Link href={{
                  pathname: '/screens/product/[id]',
                  params: {id: id}
                }}>
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

export default Explore
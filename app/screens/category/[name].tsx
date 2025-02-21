import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import Container from '@/components/Container'
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import Menu from '@/components/Menu'
import Card from '@/components/Card'
import { Foods } from '@/components/Foods'

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  imageCard: {
    width: 120,
    height: 120,
  },
  cardText: {
    width: 140
  },
  lineGreen: {
    width: 80,
    height: 3,
    backgroundColor: '#4DB066',
    marginVertical: 10,
  }
})

const Category = () => {
  const { name } = useLocalSearchParams()

  const foodsFiltered = Foods.filter(food => food.category === name)

  return (
    <Container>
      <Menu />

      <Text style={styles.title}>{name}</Text>

      <View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ height: 500 }}>
          {foodsFiltered.map(({ id, name, cover, description, price }) => (
            <Card key={id}>
              <View style={styles.cardText}>
                <Link href={`/screens/product/${id}`}>
                  <Text style={{ fontSize: 25 }}>{name}</Text>
                </Link>
                <View style={styles.lineGreen}></View>
                <Text>{description}</Text>
                <Text>{price}</Text>
              </View>
              <View>
                <Image style={styles.imageCard} source={cover} />
                <Pressable>
                  <Link href="/">
                    <Text>+</Text>
                  </Link>
                </Pressable>
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
    </Container>
  )
}

export default Category
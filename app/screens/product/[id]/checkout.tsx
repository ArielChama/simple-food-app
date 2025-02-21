import React from 'react'
import Container from '@/components/Container'
import { useLocalSearchParams } from 'expo-router'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Foods } from '@/components/Foods'
import Menu from '@/components/Menu'

const styles = StyleSheet.create({
	LineDivisor: {
		backgroundColor: "#5200FF",
		width: 24,
		height: 3,
		borderRadius: 20, 
		marginBottom: 30
	}
})

/*type CheckoutType = {
  size: String,
  quantity: number
}
*/
const Checkout = () => {
  let id = +useLocalSearchParams().id;
  let quantity = +useLocalSearchParams().quantity;
  const size = useLocalSearchParams().size;

  let totalPrice = parseFloat((+useLocalSearchParams().price * quantity).toFixed(2))

  const product = Foods.find((food => food.id == id))

  if (!product) {
    return <Text>Produto indisponivel</Text>  
  }

  return (
      <Container>
        <Menu />

        <View>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{product.name}</Text>
          <View style={styles.LineDivisor}></View>
          <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Size: {size}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold'  }}>Estimated delivery  time - 10 mins</Text>
        </View>
    
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 0, marginBottom: 270}}>
            {Array.from({ length: Math.min(quantity, 3) }).map((_, index) => (
              <Image key={index} source={product.cover} style={{ width: 224.53, height: 224.53, position: 'absolute', left: index * 30, top: index * 15, zIndex: -index  }} />
            ))}
          </View>
  
          <View>
            <Text style={{ fontStyle: 'italic', fontWeight: 'medium' }}>Choose payment method</Text>
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginVertical: 20 }}>
                <Pressable style={{ backgroundColor: '#4DB066', padding: 20, borderRadius: 40, height: 64, width: 54.86 }}>
                  <Text style={{ color: '#FFF' }}>+</Text>
                </Pressable>

                <View style={{ padding: 20, borderColor: '#FF9900', borderWidth: 4, borderRadius: 20 }}>
                  <View style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Image source={require('@/assets/images/mastercard.png')} style={{ width: 69, height: 49, marginBottom: 20 }} />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>**************7622</Text>
                  <Text style={{ fontSize: 12, marginTop: 5 }}>Exp: 03/23</Text>
                </View>

                <View style={{ padding: 20, borderColor: '#4688F0', borderWidth: 4, borderRadius: 20 }}>
                  <View style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Image source={require('@/assets/images/mastercard.png')} style={{ width: 69, height: 49, marginBottom: 20 }} />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>**************7622</Text>
                  <Text style={{ fontSize: 12, marginTop: 5 }}>Exp: 03/23</Text>
                </View>
              </View>
            </ScrollView>
          
            <View style={{ borderColor: '#FF9900', borderWidth: 1, padding: 20, borderRadius: 20, marginTop: 10 }}>
              <Text style={{ fontStyle: 'italic' }}>Apply coupon code</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 20, alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', marginRight: 30 }}>Total price</Text>
              <Text style={{ fontWeight: 'bold', color: '#4688F0', fontStyle: 'italic', fontSize: 40 }}>{totalPrice}</Text>
            </View>
          </View>
          
          <Pressable style={{ backgroundColor: '#4DB066', padding: 20, borderRadius: 20, width: 350, marginBottom: 20 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
              Check out
            </Text>
          </Pressable>
        </View>
      </Container>
    )
}

export default Checkout
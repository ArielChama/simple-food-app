import Container from "@/components/Container"
import { Link } from "expo-router"
import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import Swiper from 'react-native-swiper'


const styles = StyleSheet.create({
  focus: {
    color: '#E8453C',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    lineHeight: 20
  },
  slide: {
    flex: 1,
    alignItems: "center",
    padding: 40,
    backgroundColor: '#fff',
    paddingTop: 150
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#4688F0',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  image: {
    height: 397,
  },
  button: {

  }
})

export default function Index() {
  return (
    <Swiper loop={false} showsPagination={true} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      <View style={styles.slide}>
        <Image style={styles.image} source={require('@/assets/images/onboarding.png')} />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}><Text style={styles.focus}>#</Text> Fatest Food Delivery</Text>
          <Text style={styles.description}>
            Want a delicious meal, but no
            time we will deliver it hot and yummy.
          </Text>
        </View>

        <Pressable style={{ backgroundColor: '#4688F0', padding: 20, borderRadius: 20, width: 332 }}>
          <Link href="/screens/home">
            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
              Order food
            </Text>
          </Link>
        </Pressable>
      </View>

      <View style={styles.slide}>
        <Image style={styles.image} source={require('@/assets/images/onboarding-2.png')} />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}><Text style={styles.focus}>#</Text> Good Food for Good Moments</Text>
          <Text style={styles.description}>
            Taste that best, its on time.
          </Text>
        </View>

        <Pressable style={{ backgroundColor: '#3AA856', padding: 20, borderRadius: 20, width: 332, }}>
          <Link href="/screens/home">
            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
              Order food
            </Text>
          </Link>
        </Pressable>
      </View>

      <View style={styles.slide}>
        <Image style={styles.image} source={require('@/assets/images/onboarding-3.png')} />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}><Text style={styles.focus}>#</Text> Good food smile</Text>
          <Text style={styles.description}>
            Want a delicious meal, but no
            time we will deliver it hot and yummy.
          </Text>
        </View>

        <Pressable style={{ backgroundColor: '#E8453C', padding: 20, borderRadius: 20, width: 332, }}>
          <Link href="/screens/home">
            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
              Order food
            </Text>
          </Link>
        </Pressable>
      </View>
    </Swiper>
  )
}

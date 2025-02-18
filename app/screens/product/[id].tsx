import React from 'react'
import Container from '@/components/Container'
import { Link, useLocalSearchParams } from 'expo-router'
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Foods } from '@/components/Foods'

const styles = StyleSheet.create({
	LineDivisor: {
		backgroundColor: "#5200FF",
		width: 24,
		height: 3,
		borderRadius: 20, 
		marginBottom: 30
	},
	imageM: {
		width: 224.53,
		height: 224.53,
		marginVertical: 20,
		marginLeft: 20,
	},
	imageS: {
		width: 161.05,
		height: 161.05,
		marginVertical: 50,
		marginLeft: 20,
	},
	imageL: {
		width: 340.71,
		height: 340.71,
		marginVertical: 0,
		marginLeft: 20,
	}
})

const Product = () => {
	const [size, setSize] = React.useState<string>("M")
	let id = +useLocalSearchParams().id;
	const product = Foods.find((food => food.id == id))
	const [info, setInfo] = React.useState(product?.size?.M)

	const changeSize = (s: string) => {
		setSize(s)
		setInfo(product?.size?.[s as keyof typeof product.size])
	}

	if (!product) {
		return (
			<View>
				<Text>Produto não encontrado</Text>
			</View>
		)
	}

	return (
		<Container>
			<View>
				<Text style={{ fontSize: 40, fontWeight: 'bold' }}>{product.name}</Text>
				<View style={styles.LineDivisor}></View>
				<Text style={{ fontSize: 40, fontWeight: 'medium', color: '#5200FF' }}>$ {product.price}</Text>
			</View>

			<View>
				<View>
					<Image source={product.cover} style={size == "M" ? styles.imageM : size == "L" ? styles.imageL : styles.imageS} />
				</View>

				<View>
					<Text style={{ fontStyle: 'italic' }}>Choose size -Medium</Text>

					<View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginVertical: 20 }}>
						<Pressable onPress={() => changeSize("S")} style={{ backgroundColor: size == 'S' ? '#4DB066' : '#595959', padding: 20, borderRadius: 40 }}>
							<Text style={{ color: '#FFF' }}>S</Text>
						</Pressable>

						<Pressable onPress={() => changeSize("M")} style={{ backgroundColor: size == 'M' ? '#4DB066' : '#595959', padding: 20, borderRadius: 60 }}>
							<Text style={{ color: '#FFF' }}>M</Text>
						</Pressable>

						<Pressable onPress={() => changeSize("L")} style={{ backgroundColor: size == 'L' ? '#4DB066' : '#595959', padding: 20, borderRadius: 40 }}>
							<Text style={{ color: '#FFF' }}>L</Text>
						</Pressable>
					</View>

					<View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', borderColor: '#4DB066', borderWidth: 1, borderRadius: 20, padding: 30, marginVertical: 20 }}>
						<View>
							<Text style={{ fontSize: 14 }}>Calories</Text>
							<Text style={{ fontSize: 20, fontWeight: 'semibold' }}>{info?.calories} Calories</Text>
						</View>

						<View>
							<Text style={{ fontSize: 14 }}>Weight</Text>
							<Text style={{ fontSize: 20, fontWeight: 'semibold' }}>{info?.weight} gr</Text>
						</View>
					</View>
				</View>

				<Pressable style={{ backgroundColor: '#E8453C', padding: 20, borderRadius: 20, width: 350, marginBottom: 20 }}>
					<Link href="/screens/explore">
						<Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
							Next
						</Text>
					</Link>
				</Pressable>
			</View>
		</Container>
	)
}

export default Product
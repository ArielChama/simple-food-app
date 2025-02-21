import React from 'react'
import Container from '@/components/Container'
import { Link, Redirect, useLocalSearchParams, useRouter } from 'expo-router'
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Foods } from '@/components/Foods'
import Menu from '@/components/Menu'

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
		position: 'relative'
	},
	imageS: {
		width: 161.05,
		height: 161.05,
	},
	imageL: {
		width: 340.71,
		height: 340.71,
	}
})

const Product = () => {
	const [size, setSize] = React.useState<string>("M")
	let id = +useLocalSearchParams().id;
	const product = Foods.find((food => food.id == id))
	const [info, setInfo] = React.useState(product?.size?.M)
	const [step, setStep] = React.useState(0)
	const [quantity, setQuantity] = React.useState(1)
	const router = useRouter();


	const changeSize = (s: string) => {
		setSize(s)
		setInfo(product?.size?.[s as keyof typeof product.size])
	}

	const handleStep = () => {
		setStep(step + 1)

		if (step === 1) {
			router.replace(`/screens/product/${id}/checkout?size=${size}&quantity=${quantity}&price=${info?.price}`)
		}
  }

	const addQuantity = () => {
    setQuantity(quantity+1)
  }

	const reduceQuantity = () => {
		setQuantity(quantity-1)
	}

	if (!product || !info) {
		return (
			<View>
				<Text>Produto não encontrado</Text>
			</View>
		)
	}

	return (
		<Container>
			<Menu />

			<View>
				<Text style={{ fontSize: 40, fontWeight: 'bold' }}>{product.name}</Text>
				<View style={styles.LineDivisor}></View>
				<Text style={{ fontSize: 40, fontWeight: 'medium', color: '#5200FF' }}>$ {info?.price}</Text>
			</View>

			<View>
				<View style={{ display: 'flex', flexDirection: 'row', marginTop: 0, marginBottom: 270}}>
					{Array.from({ length: Math.min(quantity, 3) }).map((_, index) => (
						<Image key={index} source={product.cover} style={[
							size === "M" ? styles.imageM : size === "L" ? styles.imageL : styles.imageS,
							{
								position: 'absolute',
								left: index * 30, 
								top: index * 15,  
								zIndex: -index,  
							}
						]} />
					))}
				</View>

				{step == 0 ? (
					<View>
						<Text style={{ fontStyle: 'italic' }}>Choose size -Medium</Text>

						<View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginVertical: 10 }}>
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
				): (
					<View>
            <Text style={{ fontStyle: 'italic' }}>Choose a count</Text>
            
						<View style={{ display: 'flex', flexDirection: 'row', marginVertical: 20 }}>
							<Pressable onPress={reduceQuantity} style={{ backgroundColor: '#4DB066', padding: 20, borderRadius: 40 }}>
								<Text style={{ color: '#FFF' }}>-</Text>
							</Pressable>
							
							<Text style={{ fontSize: 40, fontWeight: 'bold', marginHorizontal: 30 }}>{quantity}</Text>
							
							<Pressable onPress={addQuantity} style={{ backgroundColor: '#4DB066', padding: 20, borderRadius: 40 }}>
								<Text style={{ color: '#FFF' }}>+</Text>
							</Pressable>
						</View>

						<View style={{ marginVertical: 20 }}>
							<Text style={{ fontSize: 40, fontStyle: 'italic', fontWeight: 'light' }}>{parseFloat((info?.price * quantity).toFixed(2))}</Text>
						</View>
          </View>
				)}

				<Pressable onPress={handleStep} style={{ backgroundColor: '#E8453C', padding: 20, borderRadius: 20, width: 350, marginBottom: 20 }}>
					<Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
						Next
					</Text>
				</Pressable>

				<Link href={{
          pathname: '/screens/product/[id]/checkout',
          params: { id: id, size: size, quantity: quantity}
        }}>
				</Link>
			</View>
		</Container>
	)
}

export default Product
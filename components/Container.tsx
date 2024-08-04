import { ReactNode } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

interface ContainerProps {
  children: ReactNode
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 30,
    marginTop: 40
  }
})

export default function Container({ children }: ContainerProps) {
  return (
    <ScrollView>
      <View style={styles.main}>
        <View>
          {children}
        </View>
      </View>
    </ScrollView>
  )
} 
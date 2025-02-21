import Svg, { Line } from 'react-native-svg'

const BackArrow = () => {
  return (
    <Svg width="12" height="19" viewBox="0 0 8 15" fill="none">
      <Line y1="7.5" x2="3" y2="7.5" stroke="black" stroke-width="5"/>
      <Line y1="-1.5" x2="8.48528" y2="-1.5" transform="matrix(0.707107 0.707107 -0.406138 0.913812 0.666504 9)" stroke="black" stroke-width="5"/>
      <Line y1="-1.5" x2="8.48528" y2="-1.5" transform="matrix(0.707107 -0.707107 0.406138 0.913812 1.3335 9)" stroke="black" stroke-width="5"/>
    </Svg>
  )
}

export default BackArrow
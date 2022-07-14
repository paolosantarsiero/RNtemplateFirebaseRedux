import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { navigate } from '@/Navigators/utils'

interface Props {
  item: string
}

const Circle = ({ item }: Props) => {
  const { Common, Fonts } = useTheme()

  return (
    <View>
      <TouchableOpacity
        style={[Fonts.textLarge, Common.backgroundPrimary]}
        onPress={() => navigate('RouteDetails', {})}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Circle

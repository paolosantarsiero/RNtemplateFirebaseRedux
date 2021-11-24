import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { navigate } from '@/Navigators/utils'
import { Route as RouteType } from '@/Store/Firebase'

interface Props {
  item: RouteType
}

const Route = ({ item }: Props) => {
  const { Common, Fonts } = useTheme()

  return (
    <View>
      <TouchableOpacity
        style={[Fonts.textLarge, Common.backgroundPrimary]}
        onPress={() => navigate('RouteDetails', {})}
      >
        <Text>{item.id}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Route

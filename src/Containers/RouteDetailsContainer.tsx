import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FirebaseState } from '@/Store/Firebase'

const RouteDetailsContainer = () => {
  const { Gutters, Layout } = useTheme()
  const route = useSelector(
    (state: FirebaseState) => state.firestore.ordered.routesTest[0],
  )

  return (
    <SafeAreaView style={Layout.fill}>
      <View>
        <Text>Header Details</Text>
      </View>
      <View style={[Layout.columnVCenter, Gutters.smallHPadding]} />
      <Text>{route.id}</Text>
    </SafeAreaView>
  )
}

export default RouteDetailsContainer

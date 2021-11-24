import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListContainer from '@/Containers/ListContainer'
import { RouteDetailsContainer } from '@/Containers'

const Stack = createStackNavigator()

const ListRoutesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListRoutes" component={ListContainer} />
      <Stack.Screen name="RouteDetails" component={RouteDetailsContainer} />
    </Stack.Navigator>
  )
}

export default ListRoutesNavigator

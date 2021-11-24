import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MapContainer } from '@/Containers'
import ListRoutesNavigator from './ListRoutes'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="List" component={ListRoutesNavigator} />
      <Tab.Screen name="Map" component={MapContainer} />
    </Tab.Navigator>
  )
}

export default TabNavigator

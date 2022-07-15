import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MapContainer } from '@/Containers'
import ListRoutesNavigator from './ListRoutes'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="List"
        component={ListRoutesNavigator}
        options={{
          tabBarIcon: () => (
            <Icon name="ios-person" size={30} color="#4F8EF7" />
          ),
        }}
      />
      <Tab.Screen name="Map" component={MapContainer} />
    </Tab.Navigator>
  )
}

export default TabNavigator

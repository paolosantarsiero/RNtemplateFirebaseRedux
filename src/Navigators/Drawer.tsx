import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './Tab'
import ChiSiamoContainer from '@/Containers/ChiSiamoContainer'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@/Hooks'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { navigateAndSimpleReset } from './utils'
import Logo from '@/Components/Logo'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  const { Layout, Gutters } = useTheme()
  return (
    <Drawer.Navigator
      drawerContent={() => (
        <SafeAreaView
          style={[
            Layout.fullSize,
            Gutters.largeHPadding,
            Gutters.largeVPadding,
          ]}
        >
          <Logo />
          <FlatList
            data={['Home', 'ChiSiamo']}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[Gutters.regularVMargin]}
                onPress={() => navigateAndSimpleReset(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      )}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="ChiSiamo" component={ChiSiamoContainer} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

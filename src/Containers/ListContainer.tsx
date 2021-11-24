import React from 'react'
import { Button, Text, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Route from '@/Components/Route'
import { switchTab } from '@/Navigators/utils'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { FirebaseState } from '@/Store/Firebase'

const ListContainer = () => {
  const { Gutters, Layout } = useTheme()

  useFirestoreConnect([{ collection: 'routesTest' }])
  const routes = useSelector(
    (state: FirebaseState) => state.firestore.ordered.routesTest,
  )

  return (
    <SafeAreaView style={Layout.fill}>
      <View>
        <Text>Header List</Text>
        <Button title="Mappa" onPress={() => switchTab('Map')} />
      </View>
      <View style={[Layout.columnVCenter, Gutters.smallHPadding]}>
        <FlatList
          data={routes}
          renderItem={({ item }) => <Route item={item} />}
        />
      </View>
    </SafeAreaView>
  )
}

export default ListContainer

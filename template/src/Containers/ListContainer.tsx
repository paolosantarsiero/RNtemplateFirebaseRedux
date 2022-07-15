import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useTheme } from '@/Hooks'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Route from '@/Components/Route'
import { switchTab } from '@/Navigators/utils'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { FirebaseState } from '@/Store/Firebase'
import { useTranslation } from 'react-i18next'

const ListContainer = () => {
  const { t } = useTranslation()
  const { Gutters, Layout } = useTheme()

  useFirestoreConnect([{ collection: 'routes' }])
  const routes = useSelector(
    (state: FirebaseState) => state.firestore.ordered.routes,
  )

  return (
    <SafeAreaView style={Layout.fill}>
      <View>
        <Text>Header List</Text>
      </View>
      <View style={[Layout.columnVCenter, Gutters.smallHPadding]}>
        <FlatList
          data={routes}
          renderItem={({ item }) => <Route item={item} />}
        />
      </View>
      <Button
        style={Gutters.largeHMargin}
        mode="contained"
        onPress={() => switchTab('Map')}
      >
        {t('Map')}
      </Button>
    </SafeAreaView>
  )
}

export default ListContainer

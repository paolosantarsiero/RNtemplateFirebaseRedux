import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import './Translations'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebaseApp from '@react-native-firebase/app'
import { Provider as PaperProvider } from 'react-native-paper'
import '@react-native-firebase/auth'
import '@react-native-firebase/firestore'

const firebase = firebaseApp.app()

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
}

const App = () => (
  <Provider store={store}>
    {/**
     * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
     * and saved to redux.
     * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
     * for example `loading={<SplashScreen />}`.
     * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
     */}
    <PersistGate loading={null} persistor={persistor}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <PaperProvider>
          <ApplicationNavigator />
        </PaperProvider>
      </ReactReduxFirebaseProvider>
    </PersistGate>
  </Provider>
)

export default App

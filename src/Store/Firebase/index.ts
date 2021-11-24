import { FirebaseReducer } from 'react-redux-firebase'
import { FirestoreReducer } from 'redux-firestore'

// Optional: If you use the user profile option
interface Profile {
  name: string
  email: string
}

// If you have a todos collection, you might have this type
export interface Route {
  id?: string
  title: string
  description: string
  start?: {
    latitude: number
    longitude: number
  }
  image?: string
  mapPreview?: string
}

// Optional: You can define the schema of your Firebase Redux store.
// This will give you type-checking for state.firebase.data.todos and state.firebase.ordered.todos
interface Schema {
  routesTest: [Route]
}

export interface FirebaseState {
  firebase: FirebaseReducer.Reducer<Schema>
  firestore: FirestoreReducer.Reducer<Schema>
}

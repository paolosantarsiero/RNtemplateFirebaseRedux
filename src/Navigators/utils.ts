/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {
  CommonActions,
  DrawerActions,
  TabActions,
  createNavigationContainerRef,
} from '@react-navigation/native'

type RootStackParamList = {
  Startup: undefined
  Home: undefined
  List: undefined
  Map: undefined
  ListRoute: undefined
  RouteDetails: undefined
  ChiSiamo: undefined
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export function navigate(name: keyof RootStackParamList, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    )
  }
}

export function navigateAndSimpleReset(name: string, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      }),
    )
  }
}

export function switchTab(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(TabActions.jumpTo(name, params))
  }
}

export function closeDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer())
  }
}

import React from 'react'
import { Image } from 'react-native'
import { useTheme } from '@/Hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { navigateAndSimpleReset } from '@/Navigators/utils'

interface Props {
  height?: number | string
  width?: number | string
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Logo = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme()

  return (
    <TouchableOpacity
      style={{ height, width }}
      onPress={() => navigateAndSimpleReset('Home')}
    >
      <Image style={Layout.fullSize} source={Images.logo} resizeMode={mode} />
    </TouchableOpacity>
  )
}

Logo.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Logo

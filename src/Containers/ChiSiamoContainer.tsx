import React from 'react'
import { Text, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'

const ChiSiamoContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <Text style={[Fonts.textLarge, Common.backgroundPrimary]}>
        {t('Chi siamo')}
      </Text>
    </ScrollView>
  )
}

export default ChiSiamoContainer

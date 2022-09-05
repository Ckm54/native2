import React from 'react'
import { View, SafeAreaView, FlatList, Text } from 'react-native'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'
import{ COLORS, COOLORS, NFTData } from '../constants'

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  )
}

export default Home
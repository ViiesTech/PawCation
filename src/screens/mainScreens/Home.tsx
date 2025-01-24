import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import SvgIcons from '../../Components/SvgIcons'
import { currentLoc, filter, notification } from '../../assets/icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions'
import { Colors } from '../../assets/colors'
import { BoldText, NormalText } from '../../Components/Titles'
import Header from '../../Components/Header'

const Home = () => {
  return (
    <View style={{ paddingHorizontal: responsiveHeight(1), paddingVertical: responsiveHeight(2) }}>
     <Header/>
     
    </View>
  )
}

export default Home

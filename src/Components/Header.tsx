import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import SvgIcons from './SvgIcons'
import { currentLoc, filter, notification } from '../assets/icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../assets/responsive_dimensions'
import { Colors } from '../assets/colors'
import { BoldText, NormalText } from './Titles'

const Header = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(1.2) }}>
        <TouchableOpacity style={styles.iconContainer}>
          <SvgIcons xml={currentLoc} height={responsiveHeight(4)} width={responsiveWidth(6)} />
        </TouchableOpacity>
        <View>
          <BoldText color='#363636' title='Current Location' fontSize={responsiveFontSize(2.1)} alignSelf='left' />
          <NormalText color='#5E5E5E' title='6543 Chestnut Court, Boston,' fontWeight='400' fontSize={responsiveFontSize(1.7)} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: responsiveHeight(1) }}>
        <TouchableOpacity style={styles.iconContainer}>
          <SvgIcons xml={filter} height={responsiveHeight(4)} width={responsiveWidth(6)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <SvgIcons xml={notification} height={responsiveHeight(4)} width={responsiveWidth(6)} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: Colors.themeText,
    paddingHorizontal: responsiveHeight(1.8),
    paddingVertical: 11,
    borderRadius: responsiveHeight(1),
  }
})
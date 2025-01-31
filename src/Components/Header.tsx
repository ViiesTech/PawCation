import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import SvgIcons from './SvgIcons'
import { currentLoc, filter, notification, notification2 } from '../assets/icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../assets/responsive_dimensions'
import { Colors } from '../assets/colors'
import { BoldText, NormalText } from './Titles'

const Header = ({bgColor,whiteNotification,handlePress}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(1.2) }}>
    
    <TouchableOpacity onPress={handlePress} style={[styles.iconContainer,{backgroundColor: bgColor ? bgColor : Colors.themeText}]}>
          <SvgIcons xml={currentLoc} height={responsiveHeight(4)} width={responsiveWidth(6)} />
        </TouchableOpacity>
        <View>
          <BoldText color={whiteNotification ? Colors.white : '#363636'} title='Current Location' fontSize={responsiveFontSize(2.1)} alignSelf='left' />
          <NormalText color={whiteNotification ? Colors.white :'#5E5E5E'} title='6543 Chestnut Court, Boston,' fontWeight='400' fontSize={responsiveFontSize(1.7)} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: responsiveHeight(1) }}>
      <TouchableOpacity style={[styles.iconContainer,{backgroundColor: bgColor ? bgColor : Colors.themeText}]}>
      <SvgIcons xml={filter} height={responsiveHeight(4)} width={responsiveWidth(6)} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconContainer,{backgroundColor: bgColor ? bgColor : Colors.themeText}]}>
        <SvgIcons xml={whiteNotification ? notification2 : notification} height={responsiveHeight(4)} width={responsiveWidth(6)} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: responsiveHeight(1.3),
    paddingVertical: 6,
    borderRadius: responsiveHeight(1),
  }
})
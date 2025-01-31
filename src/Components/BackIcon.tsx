import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../assets/responsive_dimensions'
import { backWhite } from '../assets/icons'
import SvgIcons from './SvgIcons'

const BackIcon = ({handlePress}) => {
  return (
      <TouchableOpacity onPress={handlePress} style={{backgroundColor:'#818AF9',height:responsiveHeight(4.8),borderRadius:responsiveHeight(1),width:responsiveWidth(10),alignItems:'center',justifyContent:'center'}}>
        <SvgIcons xml={backWhite} height={responsiveHeight(2.5)} width={responsiveWidth(4)}/>
      </TouchableOpacity>
  )
}

export default BackIcon
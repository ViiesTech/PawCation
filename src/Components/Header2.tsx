import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../assets/responsive_dimensions";
import { back2, share } from '../assets/icons';
import SvgIcons from './SvgIcons';
import { Colors } from '../assets/colors';


const Header2 = ({handlePress}) => {
  return (
    <TouchableOpacity onPress={() => alert('working')} style={styles.headerView}>
      <TouchableOpacity onPress={handlePress}  style={styles.backView}>
        <SvgIcons xml={back2} height={'20'} width={'20'} />
      </TouchableOpacity>
   
      <TouchableOpacity style={styles.backView}>
        <SvgIcons xml={share} height={'20'} width={'20'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Header2;

const styles = StyleSheet.create({
  headerView: {
    position: 'absolute',
    flexDirection: 'row',
    top: responsiveHeight(3),
    left: 0,
    right: 0,
    justifyContent: 'space-between', 
    paddingHorizontal: 15,  
  },
  backView: {
    borderRadius: 10,
    backgroundColor: Colors.buttonBg,
    height: responsiveHeight(5),
    width: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

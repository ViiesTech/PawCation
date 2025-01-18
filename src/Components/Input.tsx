import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgIcons from './SvgIcons';
import {eye, eyeOff, } from '../assets/icons';
import {
  responsiveHeight,
} from '../assets/responsive_dimensions';
import {Colors} from '../assets/colors';
interface inputProps {
  placeHolder: string;
  color: string;
  fontSize: Number;
  fontWeight: string;
  backgroundColor: string;
  placeholderTxtColor: string;
  xml: string;
  security?: boolean;
  showPassword?: boolean;
  handlePress: (param: string) => void;
  setShowPassword: (param: boolean) => void;
}
const Input = ({
  placeHolder,
  placeholderTxtColor,
  color,
  fontSize,
  fontWeight,
  handlePress,
  setShowPassword,
  showPassword,
  backgroundColor,
  xml,
  security,
}: inputProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: Colors.white,
        borderRadius: responsiveHeight(1),
        padding: responsiveHeight(1),
        gap: responsiveHeight(1),
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: responsiveHeight(1),
        }}>
        <SvgIcons xml={xml} height={'20'} width={'20'} />
        <View
          style={{
            height: '60%',
            width: 0.9,
            backgroundColor: Colors.themeText,
          }}></View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <View style={{flex: security ? 0.99 : 1, }}>
          <TextInput
            placeholderTextColor={placeholderTxtColor}
            placeholder={placeHolder}
            secureTextEntry={showPassword ? false : true}
            style={{
              color: color,
              fontSize: fontSize,
              fontWeight: fontWeight,
              height: 40
            }}
            onChangeText={text => handlePress(text)}
          />
        </View>
        {security && (
          <TouchableOpacity
            style={{left: 3}}
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <SvgIcons xml={eyeOff} height={'20'} width={'20'} />
            ) : (
              <SvgIcons xml={eye} height={'15'} width={'15'} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

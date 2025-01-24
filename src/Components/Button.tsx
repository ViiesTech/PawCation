import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../assets/colors';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../assets/responsive_dimensions';
import SvgIcons from './SvgIcons';

interface ButtonProps {
  title: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  borderWidth?: number;
  borderRadius: number;
  xml: string;
  width: number;
  height: number;
  alignSelf: string;
  textFont: string;
  icon?: boolean; // Optional prop with default value
  handlePress: () => void;
}

export const Button: FC<ButtonProps> = ({
  title,
  bgColor,
  textColor,
  borderColor,
  borderWidth = 0, // Default value for borderWidth
  xml,
  handlePress,
  width,
  alignSelf,
  borderRadius,
  height,
  textFont,
  icon = false, // Default value for icon
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: bgColor,
          borderWidth: borderWidth,
          borderColor: borderColor,
          width: width ? width : '100%',
          height: height ? height : responsiveHeight(7.2),
          alignSelf: alignSelf ? alignSelf : 'center',
          borderRadius: borderRadius ? borderRadius : responsiveHeight(1.4),
        },
      ]}
    >
      {icon ? (
        <View style={styles.iconContainer}>
          <SvgIcons xml={xml} width={'25'} height={'25'} />
          <Text style={[styles.textStyle, { color: textColor, fontSize: textFont ? textFont : responsiveFontSize(2.4), }]}>{title}</Text>
        </View>
      ) : (
        <Text style={[styles.textStyle, { color: textColor, fontSize: textFont ? textFont : responsiveFontSize(2.4), }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveHeight(1.5)
  },
  textStyle: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
});

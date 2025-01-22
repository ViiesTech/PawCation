import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../assets/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../assets/responsive_dimensions';
import { BoldText, NormalText } from '../../Components/Titles';
import { Button } from '../../Components/Button';
import SvgIcons from '../../Components/SvgIcons';
import { back, mail, otp } from '../../assets/icons';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import Input from '../../Components/Input';
const ForgotPass = ({ navigation }) => {

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        // justifyContent: 'center',
        backgroundColor: Colors.white,
        padding: 20,
        paddingTop: 30
      }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
      <SvgIcons xml={back} height={'20'} width={'20'} />
      </TouchableOpacity>
      <View
        style={{
          gap: responsiveHeight(1),
          marginBottom: responsiveHeight(1.5),
          flex: 0.8,
          justifyContent: 'center'
        }}>
        <SvgIcons align='center' xml={otp} height={'150'} width={'150'} />
        <BoldText mrgnTop={responsiveHeight(2)} title="Forgot password" />
        <NormalText
          color='#3B4C68'
        fontWeight='400'
          txtAlign='center'
          alignSelf="center"
          title="Please enter your email to reset password"
        />
        
        <View style={{marginTop:responsiveHeight(4),gap:responsiveHeight(4)}}>
        <Input
          xml={mail}
          placeholderTxtColor={Colors.themeText}
          handlePress={text => console.log('text', text)}
          color={Colors.themeText}
          backgroundColor={Colors.white}
          fontSize={16}
          fontWeight="bold"
          placeHolder="Exampleemail@com"
        />
          <Button
            handlePress={() => navigation.navigate('ResetPass')}
            textColor={Colors.white}
            bgColor={Colors.buttonBg}
            title="Continue"
          />
        </View>
      </View>

    </ScrollView>
  );
};

export default ForgotPass;


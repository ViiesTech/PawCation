import {
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../assets/colors';
import {
  responsiveHeight,
} from '../../assets/responsive_dimensions';
import { BoldText, NormalText } from '../../Components/Titles';
import { Button } from '../../Components/Button';
import SvgIcons from '../../Components/SvgIcons';
import { back, otp, security } from '../../assets/icons';

import Input from '../../Components/Input';
const ResetPass = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Colors.white,
        padding: 20,
        paddingTop: 30
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
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
        <BoldText mrgnTop={responsiveHeight(2)} title="Reset Password" />
        <NormalText
          color='#3B4C68'
          fontWeight='400'
          txtAlign='center'
          alignSelf="center"
          title="Please enter your new password to reset password"
        />

        <View style={{ marginTop: responsiveHeight(4), gap: responsiveHeight(4) }}>
          <Input
            xml={security}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            security={true}
            placeholderTxtColor={Colors.themeText}
            handlePress={text => console.log('text', text)}
            color={Colors.themeText}
            backgroundColor={Colors.white}
            fontSize={16}
            fontWeight="bold"
            placeHolder="*********"
          />
          <Input
            xml={security}
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
            security={true}
            placeholderTxtColor={Colors.themeText}
            handlePress={text => console.log('text', text)}
            color={Colors.themeText}
            backgroundColor={Colors.white}
            fontSize={16}
            fontWeight="bold"
            placeHolder="*********"
          />
          <Button
            handlePress={() => navigation.navigate('SelectType')}
            textColor={Colors.white}
            bgColor={Colors.buttonBg}
            title="Continue"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPass;


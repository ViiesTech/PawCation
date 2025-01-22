import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Input from '../../Components/Input';
import { Colors } from '../../assets/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../assets/responsive_dimensions';
import { BoldText, NormalText } from '../../Components/Titles';
import { Button } from '../../Components/Button';
import { mail, security, user } from '../../assets/icons';
const Register = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
        padding: 20,
      }}>
      <View
        style={{
          gap: responsiveHeight(1),
          marginBottom: responsiveHeight(3.5),
          flex: 0.1,
        }}>
        <BoldText title="Create Account" />
        <NormalText
          alignSelf="center"
          title="Sign up and discover around the world!"
        />
      </View>
      <View style={{ gap: responsiveHeight(2) }}>
        <Input
          xml={user}
          placeholderTxtColor={Colors.themeText}
          handlePress={text => console.log('text', text)}
          color={Colors.themeText}
          backgroundColor={Colors.white}
          fontSize={16}
          fontWeight="bold"
          placeHolder="Full Name"
        />
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
          placeHolder="password"
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
          placeHolder="confirm Password"
        />

        <Button
          handlePress={() => navigation.navigate('Otp')}
          textColor={Colors.white}
          bgColor={Colors.buttonBg}
          title="Sign Up"
        />
      </View>
    </ScrollView>
  );
};

export default Register;


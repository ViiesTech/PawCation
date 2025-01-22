import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Input from '../../Components/Input';
import { Colors } from '../../assets/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../assets/responsive_dimensions';
import { BoldText, NormalText } from '../../Components/Titles';
import { Button } from '../../Components/Button';
import { Apple, Google, mail, security, tick } from '../../assets/icons';
import SvgIcons from '../../Components/SvgIcons';

const Login = ({ navigation }) => {
  const [checked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
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
          flex: 0.2,
        }}>
        <BoldText title="Login Account" />
        <NormalText
          alignSelf="center"
          title="Stay signed in with your account"
        />
      </View>
      <View style={{ gap: responsiveHeight(2) }}>
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setIsChecked(!checked)} // Toggle checked state
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveHeight(1),
            }}>
            <TouchableOpacity
              onPress={() => setIsChecked(!checked)} // Toggle checked state
              style={[
                styles.button,
                checked
                  ? { backgroundColor: Colors.buttonBg }
                  : {
                    backgroundColor: Colors.white,
                    borderWidth: 1.5,
                    borderColor: Colors.buttonBg,
                  },
              ]}>
              {checked && <SvgIcons xml={tick} height="15" width="15" />}{' '}
              {/* Show SVG when checked */}
            </TouchableOpacity>
            <NormalText color={Colors.black} title="Remember me" />
          </TouchableOpacity>
          <TouchableOpacity>
            <NormalText color={Colors.buttonBg} title="Forgot Password?" />
          </TouchableOpacity>
        </View>
        <Button
          handlePress={() => navigation.navigate('Signup')}
          textColor={Colors.white}
          bgColor={Colors.buttonBg}
          title="Sign In"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: responsiveHeight(1),
          }}>
          <View
            style={{
              backgroundColor: Colors.buttonBg,
              height: 1,
              flex: 1,
            }}></View>
          <NormalText title="Or Sign In With" />
          <View
            style={{
              backgroundColor: Colors.buttonBg,
              height: 1,
              flex: 1,
            }}></View>
        </View>
        <Button
          xml={Google}
          bgColor={Colors.white}
          borderWidth={1}
          textColor={Colors.themeText}
          borderColor={Colors.buttonBg}
          icon={true}
          title="Sign in with Google"
        />
        <Button
          xml={Apple}
          bgColor={Colors.black}
          borderWidth={1}
          textColor={Colors.white}
          // borderColor={Colors.buttonBg}
          icon={true}
          title="Sign in with Apple"
        />
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(7),
    height: responsiveHeight(3.5),
    padding: 10, // Add padding for touchable area
    borderRadius: responsiveHeight(1), // Add border radius if required
  },
});

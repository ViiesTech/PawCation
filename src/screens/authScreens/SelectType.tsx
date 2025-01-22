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
import { back, dayCare, otp, security, userType } from '../../assets/icons';

import Input from '../../Components/Input';
const SelectType = ({ navigation }) => {
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
        <BoldText mrgnTop={responsiveHeight(2)} title="Select Experience" />

        <View style={{ marginTop: responsiveHeight(4), gap: responsiveHeight(2), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity>
            <SvgIcons xml={userType} height={'150'} width={'150'} />
          </TouchableOpacity>
          <TouchableOpacity>

            <SvgIcons xml={dayCare} height={'150'} width={'150'} />
          </TouchableOpacity>

        </View>

      </View>
      <View style={{ position: 'absolute', bottom: responsiveHeight(3), width: '100%', alignSelf: 'center' }}>
        <Button
          handlePress={() => navigation.navigate('SelectType')}
          textColor={Colors.white}
          bgColor={Colors.buttonBg}
          title="Continue"
        />
      </View>
    </ScrollView>
  );
};

export default SelectType;


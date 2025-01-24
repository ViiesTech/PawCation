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
import { back, otp } from '../../assets/icons';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
const Otp = ({ navigation }) => {
  const [value, setValue] = useState('');
  const CELL_COUNT = 6;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="*"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <View
        style={{
          backgroundColor: Colors.white,
          // paddingVertical: 6,
          // paddingHorizontal: 4,
          borderRadius: responsiveHeight(1),
        }}>
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {textChild}
        </Text>
      </View>
    );
  };
 
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
        <BoldText txtAlign='center' mrgnTop={responsiveHeight(2)} title="Enter OTP" />
        <NormalText
          color='#3B4C68'
        fontWeight='400'

          txtAlign='center'
          alignSelf="center"
          title="We have sent you an email containing 6 digits 
verification code. Please enter the code 
to verify your identity"
        />
         <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
        <NormalText
          color='#3B4C68'
          txtAlign='center'
          title={`Resend code (00:16)`}
          />

        <View style={{marginTop:responsiveHeight(2.5)}}>
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

export default Otp;

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: responsiveHeight(1.8),
    gap:0,
    padding:0,
  },
  cell: {
    width: responsiveWidth(13.3),
    height: 67,
    padding: 5,
    fontSize: 34,
    borderWidth: 2.5,
    borderColor:'#EFEFEF',
    textAlign: 'center',
    borderRadius: responsiveHeight(1),
    paddingVertical: 10,
    color: '#041E5E',
  },
  focusCell: {
    borderColor: Colors.buttonBg,
  },
});
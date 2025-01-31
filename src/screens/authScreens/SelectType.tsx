import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../assets/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../assets/responsive_dimensions';
import { BoldText } from '../../Components/Titles';
import { Button } from '../../Components/Button';
import SvgIcons from '../../Components/SvgIcons';
import { back, } from '../../assets/icons';

import { images } from '../../assets/images';
import { CheckBox } from '../../Components/CheckBox';
const SelectType = ({ navigation }) => {
  const [currentCategory, setCurrentCategory] = useState('user');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SvgIcons xml={back} height={'20'} width={'20'} />
      </TouchableOpacity>
      <View style={styles.mainContainer}>
        <BoldText alignSelf='center' mrgnTop={responsiveHeight(2)} title="Select Experience" />

        <View style={styles.selectExpContainer}>
          <TouchableOpacity onPress={() => setCurrentCategory('user')}>
            <TouchableOpacity
              onPress={() => setCurrentCategory('user')}
              style={styles.experienceContainer}>
              <Image
                resizeMode="stretch"
                source={images.user}
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(17),
                  left: 2
                }}
              />
              {currentCategory === 'user' && <CheckBox />}
            </TouchableOpacity>
            <BoldText alignSelf='center' title="User" mrgnTop={responsiveHeight(4)} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCurrentCategory('dayCare')}>
            <TouchableOpacity
              onPress={() => setCurrentCategory('dayCare')}
              style={styles.experienceContainer}>
              <Image
                resizeMode="stretch"
                source={images.dayCare}
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(17.3),
                }}
              />
              {currentCategory === 'dayCare' && <CheckBox />}
            </TouchableOpacity>
            <BoldText alignSelf='center' title="Hotel/Daycare" mrgnTop={responsiveHeight(4)} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          handlePress={() => {
            currentCategory === 'user' ?
              navigation.navigate('userStack') : Alert.alert('This Flow Is Under Development')
          }}
          textColor={Colors.white}
          bgColor={Colors.buttonBg}
          title="Continue"
        />
      </View>
    </ScrollView>
  );
};

export default SelectType;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    padding: 20,
    paddingTop: 30,
  },
  mainContainer: {
    gap: responsiveHeight(1),
    marginBottom: responsiveHeight(1.5),
    flex: 0.3,
    justifyContent: 'center',
  },
  experienceContainer: {
    borderColor: Colors.borderColor,
    borderWidth: 2,
    borderRadius: responsiveHeight(2),
    padding: responsiveHeight(4),
    paddingHorizontal: responsiveHeight(5.5)
  },
  buttonContainer: {
    position: 'absolute',
    bottom: responsiveHeight(3),
    width: '100%',
    alignSelf: 'center',
  },
  selectExpContainer: {
    marginTop: responsiveHeight(4),
    gap: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

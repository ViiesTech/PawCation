import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SvgIcons from '../../Components/SvgIcons'
import { back2 } from '../../assets/icons'
import { images } from '../../assets/images'
import { responsiveFontSize, responsiveHeight,responsiveWidth } from '../../assets/responsive_dimensions'
import InputField from '../../Components/InputField'
import CalendarCard from '../../Components/CalendarCard'
import { Colors } from '../../assets/colors'
import { Button } from '../../Components/Button'
import PickerCard from '../../Components/PickerCard'


const ServiceDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backView}>
          <SvgIcons xml={back2} height={'20'} width={'20'} />
        </TouchableOpacity>
        <Text style={styles.heading}>Services Details</Text>
        <View style={styles.contentView}>
          <Image source={images.service1} style={styles.imageStyle} />
          <View>
            <Text style={[styles.heading, { fontSize: responsiveFontSize(2) }]}>Lorem Ipsum</Text>
            <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <Text style={styles.price}>$15.00</Text>
          </View>
        </View>
        <View style={styles.inputContainer}> 
            <InputField placeholder='Address' />
            <CalendarCard />
            <PickerCard />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button handlePress={()=>navigation.navigate('PaymentMethod')} textColor={Colors.white} title='Continue' bgColor={Colors.buttonBg} />
      </View>
    </View>
  )
}

export default ServiceDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  subContainer: {
    padding: responsiveHeight(2),
  },
  backView: {
    borderRadius: 10,
    backgroundColor: Colors.buttonBg,
    height: responsiveHeight(5),
    width: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: Colors.themeText,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    marginTop: responsiveHeight(3.5)
  },
  contentView: {
    paddingTop: responsiveHeight(3),
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  imageStyle: {
    height: responsiveHeight(18),
    width: responsiveHeight(18)
  },
  desc: {
    color: '#A1A1A1',
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveHeight(0.5),
    width: responsiveWidth(50),
  },
  price: {
    marginTop: responsiveHeight(1),
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8)
  },
  inputContainer:{
    paddingTop: responsiveHeight(4),
    alignItems: 'center',
  },
  buttonWrapper:{
    flex: 0.9,
    padding: responsiveHeight(2),
    justifyContent: 'flex-end'
  }
})
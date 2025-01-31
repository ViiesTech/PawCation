import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { back2 } from '../../assets/icons';
import { images } from '../../assets/images';
import SvgIcons from '../../Components/SvgIcons';
import { responsiveFontSize, responsiveHeight,responsiveWidth } from '../../assets/responsive_dimensions';
import { Colors } from '../../assets/colors';
import { Button } from '../../Components/Button';


interface servicesType {
  id: number;
  text: string;
  price: number;
}

const services: servicesType[] = [
  {
    id: 1,
    text: 'Service Name',
    price: 88.00
  },
  {
    id: 2,
    text: 'Subtotal',
    price: 88.00
  },
  {
    id: 3,
    text: 'Total to pay',
    price: 88.00
  }
]

const Payment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.backView}>
          <SvgIcons xml={back2} height={'20'} width={'20'} />
        </View>
        <View style={styles.contentView}>
          <Image source={images.service1} style={styles.imageStyle} />
          <View>
            <Text style={[styles.heading, { fontSize: responsiveFontSize(2) }]}>Lorem Ipsum</Text>
            <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <Text style={styles.price}>$15.00</Text>
          </View>
        </View>
        <View style={{ paddingTop: responsiveHeight(2) }}>
          {services.map((item) => {
            return (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: responsiveHeight(2.5) }}>
                <Text style={styles.heading}>{item.text}</Text>
                <Text style={styles.priceText}>$ {item.price.toFixed(2)}</Text>
              </View>
            )
          })}
        </View>
        <Button textColor={Colors.white} bgColor={Colors.buttonBg} title='Pay Now' />
      </View>
    </View>
  )
}

export default Payment

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
    color: Colors.black,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
  },
  contentView: {
    paddingTop: responsiveHeight(7),
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
  priceText: {
    marginTop: responsiveHeight(1),
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8)
  }
})
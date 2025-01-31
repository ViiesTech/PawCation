import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import BackIcon from '../../Components/BackIcon'
import { BoldText, NormalText } from '../../Components/Titles'
import { Colors } from '../../assets/colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions'
import { images } from '../../assets/images'
import { Button } from '../../Components/Button'
import SvgIcons from '../../Components/SvgIcons'
import { calendar, pin, time } from '../../assets/icons'

const Filter = ({navigation}) => {
  const [currentCategory, setCurrentCategory] = useState('Active')
  const data = [
    {
      id: 1,
      title: 'Active'
    },
    {
      id: 2,
      title: 'Complete'
    },
    {
      id: 3,
      title: 'Canceled'
    },
  ]

  const data2 = [
    {
      id: 1,

    },
    {
      id: 2,

    },
    {
      id: 3,

    },
  ]
  const renderData = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('StoreDetails')} style={{ borderRadius: responsiveHeight(1), borderColor: 'lightgrey', borderWidth: 2, paddingVertical: responsiveHeight(2), paddingHorizontal: responsiveHeight(1) }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: responsiveHeight(1) }}>
            <Image style={{}} resizeMode='contain' source={images.hotel} />
            <View style={{ maxWidth: responsiveWidth(55), gap: responsiveHeight(1) }}>

              <Button textColor='#2A1D51' alignSelf='none' textFont={responsiveFontSize(1.8)} title='Active' bgColor='#E8EAFE' height={responsiveHeight(5)} width={responsiveWidth(30)} />
              <BoldText color={Colors.themeText} fontSize={responsiveFontSize(2.2)} fontWeight='600' title='Service Name' />
              <NormalText fontSize={responsiveFontSize(1.5)} color='#9DA5B3' title='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has' />
              <View style={{ gap: 10, marginTop: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(1) }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(1) }}>
                    <SvgIcons xml={calendar} height={'20'} width={'20'} />
                    <NormalText fontSize={responsiveFontSize(1.5)} color='#9DA5B3' alignSelf='none' title='August/24/24' />
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(1) }}>
                    <SvgIcons xml={time} height={'20'} width={'20'} />
                    <NormalText fontSize={responsiveFontSize(1.5)} color='#9DA5B3' alignSelf='none' title='9 : 00 PM' />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(1) }}>
                  <SvgIcons xml={pin} height={'20'} width={'20'} />
                  <NormalText fontSize={responsiveFontSize(1.5)} color='#9DA5B3' alignSelf='none' title='Los Angeles' />
                </View>
              </View>
            </View>
          </View>
          <View>
            <NormalText fontWeight='800' fontSize={responsiveFontSize(2.2)} color={Colors.themeText} title='$455' />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  const renderCategories = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setCurrentCategory(item.title)}
        style={{
          backgroundColor: currentCategory === item.title ? Colors.buttonBg : '#F3F3F3',
          width: responsiveWidth(28),
          paddingVertical: 10,
          // paddingHorizontal: responsiveWidth(4),
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NormalText alignSelf='center' color={currentCategory === item.title ? "white" : "#C3C8D5"} title={item.title} />
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
      <BackIcon handlePress={()=>navigation.goBack()}/>
      <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, marginTop: responsiveHeight(2) }} horizontal data={data} renderItem={renderCategories} />
      <FlatList contentContainerStyle={{ gap: responsiveHeight(1.5), marginTop: responsiveHeight(2) }} data={data2} renderItem={renderData} />
    </ScrollView>
  )
}

export default Filter
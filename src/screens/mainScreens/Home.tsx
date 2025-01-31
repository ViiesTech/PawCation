import React from 'react'
import SvgIcons from '../../Components/SvgIcons'
import { currentLoc, filter, notification, pin, plus, rating, search } from '../../assets/icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions'
import { Colors } from '../../assets/colors'
import { BoldText, NormalText } from '../../Components/Titles'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native'
import Header from '../../Components/Header'
import { images } from '../../assets/images'
import { Button } from '../../Components/Button'
import ListHeading from '../../Components/ListHeading'

const Home = ({navigation}) => {
  const data = [
    {
      id: 1,
      picture: images.boarding
    },
    {
      id: 2,
      picture: images.boarding
    },
  ]

  const nearByData = [
    {
      id: 1,
      pic: images.dog1,
    },
    {
      id: 2,
      pic: images.dog2,
    },
  ];

  const renderItem = ((area, index) => {
    return (
      <View style={{
        flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(1.5), backgroundColor: Colors.white, borderRadius: responsiveHeight(1.6), padding: 20, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: responsiveHeight(2.5),
        elevation: 5,
      }}
      >
        <View>
          <Image source={images.boarding} style={{ height: responsiveHeight(17), width: responsiveWidth(28.5) }} resizeMode='stretch' />
        </View>
        <View style={{ gap: responsiveHeight(0.8) }}>
          <BoldText title='Boarding' />
          <View style={{ flexDirection: 'row', gap: responsiveHeight(1) }}>
            <NormalText color={Colors.black} title='$1.499,00  -' />
            <NormalText color='#989898' txtDecoration='line-through' title='$1.599,00' />
          </View>
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', }}>
            <SvgIcons xml={pin} height={'20'} width={'20'} />
            <NormalText color='#989898' title='10km' />

          </View>
        </View>



      </View>
    )
  })

  const renderNearbyItems = ({ item, index }) => {
    return (
      <View key={index} style={{ padding: 10, width: responsiveWidth(48) }}>
        <Image source={item.pic} style={{ width: '100%', height: responsiveHeight(17), borderRadius: responsiveHeight(1) }} />
        <BoldText title='Store Name' fontSize={responsiveFontSize(2.4)} color='#2A1E51' />
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 5, backgroundColor: '#F5F5F5', padding: 7 }}>
            <SvgIcons xml={rating} height={'20'} width={'20'} />
            <NormalText title='4.9' alignSelf='center' color='#5F5F63' />
          </View>
          <NormalText title='Rating' alignSelf='center' color='#5F5F63' />        </View>
      </View>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingHorizontal: responsiveHeight(2), paddingVertical: responsiveHeight(2), backgroundColor: Colors.white }}>
      <Header handlePress={()=>{navigation.navigate('HomeStack',{screen:'Home2'})}}/> 
      <View style={{ backgroundColor: '#F6F6F6', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: responsiveHeight(6.5), paddingHorizontal: responsiveHeight(2), borderRadius: 10, marginTop: responsiveHeight(2.5), gap: responsiveHeight(2) }}>
        <TouchableOpacity>
          <SvgIcons xml={search} height={'20'} width={'20'} />
        </TouchableOpacity>
        <TextInput style={{ flex: 1, color: '#000' }} placeholderTextColor={'#CCCCCC'} placeholder='Find best Hotels and Pet Care' />
      </View>

      <View style={{ marginVertical: responsiveHeight(2) }}>
        <Image style={{ width: '100%', }} resizeMode='contain' source={images.slide} />
        <View style={{ position: 'absolute', height: '100%', marginTop: responsiveHeight(2.5), gap: responsiveHeight(0.8), left: responsiveHeight(3.5) }}>

          <BoldText fontSize={responsiveFontSize(2)} color={Colors.white} alignSelf='right' title='Flash Sale' />
          <NormalText color={Colors.white} title='Lorem Ipsum Dummy 
Text.'/>
          <Button alignSelf='left' height={responsiveHeight(5)} width={responsiveHeight(11)} textColor={Colors.white} bgColor='#B3BBFB' title='See All' />
        </View>

      </View>

      <ListHeading btnContainer title='Flash Sale' />
      <FlatList contentContainerStyle={{ gap: 20,marginBottom:10 }} showsHorizontalScrollIndicator={false} horizontal data={data} renderItem={renderItem} />
      <View style={{ marginTop: responsiveHeight(2) }}>

        <ListHeading title='Nearby Pet Hotel / Daycares' />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ justifyContent: 'space-between' }}
        data={nearByData}
        renderItem={renderNearbyItems}
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
      />
      <View style={{ position: 'absolute', bottom: responsiveHeight(2), right: responsiveHeight(2), zIndex: 10, }}>
        <Button width={responsiveWidth(34)} height={responsiveHeight(6.5)} title='Add Pet' bgColor={Colors.buttonBg} textColor='white' icon xml={plus} />
      </View>
    </ScrollView>
  )
}

export default Home

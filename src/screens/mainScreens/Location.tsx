import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import SvgIcons from '../../Components/SvgIcons'
import { back, backWhite, currentLoc, currentLoc2, deleteIcon, search } from '../../assets/icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions'
import BackIcon from '../../Components/BackIcon'
import { Colors } from '../../assets/colors'
import { images } from '../../assets/images'
import { Button } from '../../Components/Button'
import { BoldText, NormalText } from '../../Components/Titles'

const Location = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, backgroundColor: Colors.white, flexGrow: 1 }}>
      <BackIcon handlePress={() => navigation.goBack()} />

      <View style={{ backgroundColor: '#F6F6F6', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: responsiveHeight(6.5), paddingHorizontal: responsiveHeight(2), borderRadius: 10, marginTop: responsiveHeight(2.5), gap: responsiveHeight(2) }}>
        <TouchableOpacity>
          <SvgIcons xml={search} height={'20'} width={'20'} />
        </TouchableOpacity>
        <TextInput style={{ flex: 1, color: '#000' }} placeholderTextColor={'#CCCCCC'} placeholder='Find best Hotels and Pet Care' />
      </View>
      <View style={{ marginBottom: responsiveHeight(2.5) }}>

        <Image source={images.map} style={{ height: responsiveHeight(50), width: '100%', marginTop: responsiveHeight(2) }} />
        <TouchableOpacity style={{ height: responsiveHeight(6), width: responsiveWidth(12.5), alignItems: 'center', justifyContent: 'center', borderRadius: responsiveHeight(4), backgroundColor: '#818AF9', position: 'absolute', bottom: responsiveHeight(2), right: responsiveHeight(2) }}>
          <SvgIcons xml={currentLoc2} height={responsiveHeight(3.8)} width={responsiveWidth(5.8)} />
        </TouchableOpacity>


      </View>
      <View style={{ gap: responsiveHeight(2.2) }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white, justifyContent: 'space-between', shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderRadius: responsiveHeight(1),
          elevation: 5,
          padding: responsiveHeight(2)
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(1.5), }}>
            <View style={{ borderColor: Colors.buttonBg, borderWidth: 2, padding: 2, width: responsiveWidth(6.2), borderRadius: responsiveHeight(2), alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ backgroundColor: Colors.buttonBg, height: 18, width: 17, borderRadius: responsiveHeight(2) }}></View>
            </View>
            <View>
              <BoldText title='Home' fontWeight='600' />
              <NormalText color='#808CA0' fontWeight='400' fontSize={responsiveFontSize(1.5)} title='6543 Chestnut Court, Boston, MA 02101' />
            </View>
          </View>
          <SvgIcons xml={deleteIcon} height={'20'} width={'20'} />
        </View>
        <NormalText txtDecoration='underline' fontWeight='600' title='Add New Location' />
        <Button handlePress={()=>navigation.navigate('Filter2')} textColor='white' title='Submit' bgColor={Colors.buttonBg} />
      </View>

    </ScrollView>
  )
}

export default Location
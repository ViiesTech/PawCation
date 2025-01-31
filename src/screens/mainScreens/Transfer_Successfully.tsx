import {View, Text, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {FlatList} from 'react-native';
import {Image} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions';
import { images } from '../../assets/images';

const Transfer_Successfully = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
          style={{
            backgroundColor: '#818AF9',
            height: responsiveHeight(5),
            width: responsiveHeight(5),
            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: 10,
          }}>
          <Ionicons
            name={'chevron-back'}
            size={responsiveFontSize(2)}
            color={'#FFFFFF'}
          />
        </TouchableOpacity>

        <View style={{height:responsiveHeight(80), alignItems:'center', justifyContent:'center', gap:20}}>
            <View style={{padding:20, width:responsiveWidth(90), borderRadius:10, elevation:2, backgroundColor:'#FFFFFF'}}>
                <Text style={{color:"#000000", fontSize:responsiveFontSize(2.5), alignSelf:'center', fontWeight:'bold'}}>Transfer Successfully</Text>
                <Image source={images.green} style={{height:responsiveHeight(10), width:responsiveHeight(10), resizeMode:'contain', alignSelf:'center'}}/>
                <Text style={{width:responsiveWidth(40),textAlign:'center', alignSelf:'center'}}>You Have Successfully Transferred $228</Text>

                <TouchableOpacity
                onPress={()=>navigation.goBack()}
                          style={{
                            height: responsiveHeight(5),
                            width: responsiveWidth(80),
                            alignSelf: 'center',
                            backgroundColor: '#818AF9',
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                          }}>
                          <Text
                            style={{
                              fontSize: responsiveFontSize(2),
                              fontWeight: 'bold',
                              color: '#FFFFFF',
                            }}>
                            Go Back
                          </Text>
                        </TouchableOpacity>
                
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Transfer_Successfully
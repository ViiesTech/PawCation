import {View, Text, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {FlatList} from 'react-native';
import {Image} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions';
import { images } from '../../assets/images';

const PaymentMethod = ({navigation}) => {
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

        <Text
          style={{
            fontSize: responsiveFontSize(2),
            fontWeight: 'bold',
            color: '#000000',
            marginTop: responsiveHeight(3),
          }}>
          Payment Method
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              height: responsiveHeight(13),
              width: responsiveWidth(10),
              backgroundColor: '#818AF9',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Octicons
              name={'plus'}
              size={responsiveFontSize(3)}
              color={'#FFFFFF'}
            />
          </TouchableOpacity>
          <FlatList
            data={[1, 2, 3]}
            horizontal
            renderItem={() => {
              return (
                <Image
                  source={images.Visa}
                  style={{
                    height: responsiveHeight(13),
                    width: responsiveWidth(40),
                    marginLeft: 10,
                    borderRadius: 10,
                  }}
                />
              );
            }}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#DEDEDE',
            padding: 10,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: responsiveFontSize(2)}}>Name</Text>
          <TextInput
            placeholder="Jordan Delgado"
            placeholderTextColor={'#000000'}
            style={{height: 40}}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#DEDEDE',
            padding: 10,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: responsiveFontSize(2)}}>Card number</Text>
          <TextInput
            placeholder="***** ***** **** 789"
            placeholderTextColor={'#000000'}
            style={{height: 40}}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#DEDEDE',
              padding: 10,
              justifyContent: 'center',
              marginTop: 20,
              width: responsiveWidth(44),
            }}>
            <Text style={{fontSize: responsiveFontSize(2)}}>Expiry Date</Text>
            <TextInput
              placeholder="10-27-2025"
              placeholderTextColor={'#000000'}
              style={{height: 40}}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#DEDEDE',
              padding: 10,
              justifyContent: 'center',
              marginTop: 20,
              width: responsiveWidth(44),
            }}>
            <Text style={{fontSize: responsiveFontSize(2)}}>CVV</Text>
            <TextInput
              placeholder="***"
              placeholderTextColor={'#000000'}
              style={{height: 40}}
            />
          </View>
        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('AddCard')}
          style={{
            height: responsiveHeight(5),
            width: responsiveWidth(90),
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
            Create Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PaymentMethod;

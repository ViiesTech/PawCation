import { View, Text, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { FlatList } from 'react-native';
import { responsiveFontSize, responsiveWidth,responsiveHeight } from '../../assets/responsive_dimensions';
const AddNewCard = ({navigation}) => {
  return (
    <View style={{ padding: 20 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
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

        <View style={{ height: responsiveHeight(80), alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ padding: 20, width: responsiveWidth(90), borderRadius: 10, elevation: 2, backgroundColor: '#FFFFFF' }}>
            <Text style={{ color: "#000000", fontSize: responsiveFontSize(2.5), alignSelf: 'center', fontWeight: 'bold' }}>Add New Card</Text>
            <TextInput
              placeholder='Select Bank'
              style={{ borderWidth: 1, borderRadius: 10, borderColor: '#DEDEDE' }}
            />


            <TextInput
              placeholder='Account number'
              style={{ borderWidth: 1, borderRadius: 10, borderColor: '#DEDEDE' }}
            />



            <TextInput
              placeholder='Card Number'
              style={{ borderWidth: 1, borderRadius: 10, borderColor: '#DEDEDE' }}
            />



            <TextInput
              placeholder='CVV'
              style={{ borderWidth: 1, borderRadius: 10, borderColor: '#DEDEDE' }}
            />


            <TouchableOpacity
            onPress={()=>navigation.navigate('TransferSuccessfully')}
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
                Add Card
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddNewCard;

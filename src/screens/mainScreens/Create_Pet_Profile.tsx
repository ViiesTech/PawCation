import {View, Text, Image, TextInput, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions';
import { images } from '../../assets/images';
const Create_Pet_Profile = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
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
          fontWeight: 'bold',
          fontSize: responsiveFontSize(2),
          color: '#000000',
          marginTop: 20,
        }}>
        Create Profile
      </Text>

      <View
        style={{
          height: responsiveHeight(12),
          width: responsiveHeight(12),
          alignSelf: 'center',
        }}>
        <Image
          source={images.dog4}
          style={{
            height: responsiveHeight(12),
            width: responsiveHeight(12),
            resizeMode: 'cover',
            borderRadius: 2000,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#818AF9',
            height: responsiveHeight(4),
            width: responsiveHeight(4),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            position: 'absolute',
            zIndex: 11,
            bottom: 0,
            right: 0,
          }}>
          <Octicons
            name={'plus'}
            size={responsiveFontSize(2)}
            color={'#FFFFFF'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Pet Name</Text>
        <TextInput placeholder="Enter Name" placeholderTextColor={'#A6A6A6'} style={{height:responsiveHeight(5)}} />
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Date Of Birth</Text>
        <TextInput placeholder="DD/MM/YYYY" placeholderTextColor={'#A6A6A6'} style={{height:responsiveHeight(5)}} />
      </View>


      <View style={styles.container}>
        <Text style={styles.heading}>Breed</Text>
        <TextInput placeholder="Enter Breed" placeholderTextColor={'#A6A6A6'} style={{height:responsiveHeight(5)}} />
      </View>


      <View style={styles.container}>
        <Text style={styles.heading}>Size</Text>
        <TextInput placeholder="Enter Size" placeholderTextColor={'#A6A6A6'} style={{height:responsiveHeight(5)}} />
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Special Care Need</Text>
        <TextInput placeholder="Enter" placeholderTextColor={'#A6A6A6'} style={{height:responsiveHeight(5)}} />
      </View>
    
    <Image source={images.upload} style={{width:responsiveWidth(90), alignSelf:'center', height:responsiveHeight(15), marginTop:20, resizeMode:'stretch'}}/>


            <View style={{flexDirection:'row', alignSelf:'center', width:responsiveWidth(90),  marginTop:20, justifyContent:'space-between'}}>
                <Image source={images.dog1} style={{width:responsiveWidth(44), height:responsiveHeight(15),borderRadius:10, overflow:'hidden'}}/>
                <Image source={images.dog2} style={{width:responsiveWidth(44), height:responsiveHeight(15),borderRadius:10, overflow:'hidden'}}/>
            </View>
    
            <Image source={images.dog3} style={{width:responsiveWidth(90), height:responsiveHeight(15),borderRadius:10, overflow:'hidden', alignSelf:'center', marginTop:10}}/>
    
          
                    <TouchableOpacity onPress={()=>navigation.navigate('PetProfile')} style={{height:responsiveHeight(5), width:responsiveWidth(90), alignSelf:'center', backgroundColor:'#818AF9', borderRadius:10, alignItems:'center', justifyContent:'center',marginTop:20}}>
                              <Text style={{fontSize:responsiveFontSize(2), fontWeight:'bold', color:"#FFFFFF", }}>Create Now</Text>
                        </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

export default Create_Pet_Profile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFF',
    elevation: 10,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  heading: {fontSize: responsiveFontSize(2), color: '#000000'},
});

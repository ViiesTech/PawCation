import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions';
import { images } from '../../assets/images';

const Hotel = () => {
  const [selected, setSelected] = useState('Hotels');
  return (
    <View>
        <ScrollView contentContainerStyle={{flexGrow:1}}> 
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={images.resturant}
          style={{height: responsiveHeight(40), width: responsiveWidth(100)}}
        />
        <View style={{position: 'absolute', zIndex: 10, gap: 20}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: responsiveFontSize(5),
              fontWeight: 'bold',
            }}>
            Doli
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: responsiveFontSize(3),
              fontWeight: '300',
            }}>
            Lexington
          </Text>

          <View
            style={{
              padding: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: 200,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
              }}>
              4.9
            </Text>
            <AntDesign
              name={'star'}
              color={'#F9B908'}
              size={responsiveFontSize(2)}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          bottom: 20,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          height: responsiveHeight(90),
          backgroundColor: 'white',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 20,
              backgroundColor: selected == 'Hotels' ? '#818AF9' : '#FFFFFF',
              borderRadius: 200,
            }}
            onPress={() => setSelected('Hotels')}>
            <Text
              style={[
                styles.headog,
                {color: selected == 'Hotels' ? '#FFFFFF' : 'black'},
              ]}>
              Hotels
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 20,
              backgroundColor: selected == 'Foods' ? '#818AF9' : '#FFFFFF',
              borderRadius: 200,
            }}
            onPress={() => setSelected('Foods')}>
            <Text
              style={[
                styles.headog,
                {color: selected == 'Foods' ? '#FFFFFF' : 'black'},
              ]}>
              Foods
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              paddingHorizontal: 20,
              backgroundColor: selected == 'Activities' ? '#818AF9' : '#FFFFFF',
              borderRadius: 200,
            }}
            onPress={() => setSelected('Activities')}>
            <Text
              style={[
                styles.headog,
                {color: selected == 'Activities' ? '#FFFFFF' : 'black'},
              ]}>
              Activities
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={images.dog6}
            style={{
              height: responsiveHeight(30),
              width: responsiveWidth(40),
              borderRadius: 20,
            }}
          />

          <View>
            <Image
              source={images.dog6}
              style={{
                height: responsiveHeight(30),
                width: responsiveWidth(40),
                borderRadius: 20,
              }}
            />
            <View
              style={{
                position: 'absolute',
                zIndex: 10,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,   
                backgroundColor:'black',
                opacity:0.7,
                borderRadius:20,
                alignItems:'center',
                justifyContent:'center'
              }}>
                <Text style={{color:'#FFFFFF', fontSize:responsiveFontSize(3), fontWeight:'400'}}>10+</Text>
              </View>

          </View>
        </View>
        <View style={{paddingTop:15, gap:5}}>
              <Text style={{fontSize:responsiveFontSize(2.5), fontWeight:'bold'}}>DETAILS</Text>

              <Text style={{fontSize:responsiveFontSize(2)}}>There are so many foods you must eat in Bali but this article might be too long if we list all of it. This guide includes some tra.. Read More</Text>

              <TouchableOpacity style={{height:responsiveHeight(5), width:responsiveWidth(90), alignSelf:'center', backgroundColor:'#818AF9', borderRadius:10, alignItems:'center', justifyContent:'center',marginTop:20}}>
                    <Text style={{fontSize:responsiveFontSize(2), fontWeight:'bold', color:"#FFFFFF", }}>Continue</Text>
              </TouchableOpacity>

        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Hotel;

const styles = StyleSheet.create({
  headog: {
    fontSize: responsiveFontSize(2.5),
    color: '#000000',
  },
});

import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions';
import { images } from '../../assets/images';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const UserProfile = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#818AF9',
              height: responsiveHeight(5),
              width: responsiveHeight(5),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              position: 'absolute',
              zIndex: 10,
              top: 10,
              left: 10,
            }}>
            <Ionicons
              name={'chevron-back'}
              size={responsiveFontSize(2)}
              color={'#FFFFFF'}
            />
          </TouchableOpacity>
          <Image
            source={images.cover}
            style={{height: responsiveHeight(30), width: responsiveWidth(100)}}
          />
          <View
            style={{
              height: responsiveHeight(15),
              width: responsiveHeight(15),
              alignSelf: 'center',
              position: 'absolute',
              zIndex: 10,
              bottom: -50,
            }}>
            <Image
              source={images.pfp}
              style={{
                height: responsiveHeight(15),
                width: responsiveHeight(15),
                resizeMode: 'contain',
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#818AF9',
                height: responsiveHeight(5),
                width: responsiveHeight(5),
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
        </View>
        <View style={{height: responsiveHeight(7)}} />
        <Text
          style={{
            alignSelf: 'center',
            fontSize: responsiveFontSize(2),
            fontWeight: 'bold',
            color: '#000000',
          }}>
          Ronald Sustroharjo
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: responsiveFontSize(1.5),
            fontWeight: '500',
            color: '#000000',
          }}>
          3 Years
        </Text>

        <View
          style={{
            padding: 10,
            width: responsiveWidth(90),
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text>Edit Profile</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            width: responsiveWidth(90),
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View>
            <Image
              source={images.dog4}
              style={{
                width: responsiveWidth(44),
                height: responsiveHeight(15),
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <View style={{position: 'absolute', top: 10, right: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#818AF9',
                  height: responsiveHeight(4),
                  width: responsiveHeight(4),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <MaterialIcons
                  name={'edit'}
                  size={responsiveFontSize(2)}
                  color={'#FFFFFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={{position: 'absolute', bottom: 10, left: 10}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2),
                }}>
                Bella
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={images.dog5}
              style={{
                width: responsiveWidth(44),
                height: responsiveHeight(15),
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <View style={{position: 'absolute', top: 10, right: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#818AF9',
                  height: responsiveHeight(4),
                  width: responsiveHeight(4),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <MaterialIcons
                  name={'edit'}
                  size={responsiveFontSize(2)}
                  color={'#FFFFFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={{position: 'absolute', bottom: 10, left: 10}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2),
                }}>
                Bella
              </Text>
            </View>
          </View>
        </View>

        <Image
          source={images.dog6}
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(15),
            borderRadius: 10,
            overflow: 'hidden',
            alignSelf: 'center',
            marginTop: 10,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            width: responsiveWidth(90),
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
            <View>
            <Image
              source={images.dog7}
              style={{
                width: responsiveWidth(44),
                height: responsiveHeight(15),
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <View style={{position: 'absolute', top: 10, right: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#818AF9',
                  height: responsiveHeight(4),
                  width: responsiveHeight(4),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <MaterialIcons
                  name={'edit'}
                  size={responsiveFontSize(2)}
                  color={'#FFFFFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={{position: 'absolute', bottom: 10, left: 10}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2),
                }}>
                Bella
              </Text>
            </View>
          </View>

          <View>
            <Image
              source={images.dog7}
              style={{
                width: responsiveWidth(44),
                height: responsiveHeight(15),
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <View style={{position: 'absolute', top: 10, right: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#818AF9',
                  height: responsiveHeight(4),
                  width: responsiveHeight(4),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <MaterialIcons
                  name={'edit'}
                  size={responsiveFontSize(2)}
                  color={'#FFFFFF'}
                />
              </TouchableOpacity>
            </View>

            <View style={{position: 'absolute', bottom: 10, left: 10}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(2),
                }}>
                Bella
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;

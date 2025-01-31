import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { images } from '../../assets/images';
import Header2 from '../../Components/Header2';
import { heart, rating } from '../../assets/icons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions';
import SvgIcons from '../../Components/SvgIcons';
import { Colors } from '../../assets/colors';
import ServiceCard from '../../Components/ServicesCard';
import { Button } from '../../Components/Button';


interface galleryImagesTypes {
  id: number;
  image: ImageSourcePropType;
}

const galleryImages: galleryImagesTypes[] = [
  {
    id: 1,
    image: images.storedetail2,
  },
  {
    id: 2,
    image: images.storedetail3,
  },
  {
    id: 3,
    image: images.storedetail4,
  },
];

const StoreDetails = ({navigation}) => {
  const [selected,setSelected] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Image source={images.storedetail1} style={styles.backImage} />
      <Header2 />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: responsiveHeight(10) }}>
        <View style={styles.storeView}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.heading}>Store Name</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: responsiveHeight(1) }}>
                <View style={styles.ratingView}>
                  <SvgIcons xml={rating} height={'13'} width={'13'} />
                  <Text style={styles.ratingText}>4.9</Text>
                </View>
                <Text style={styles.rating}>Rating</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.heartView}>
              <SvgIcons xml={heart} height={'20'} width={'20'} />
            </TouchableOpacity>
          </View>
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
          <View style={{ paddingTop: responsiveHeight(2) }}>
            <Text style={styles.heading}>Gallery</Text>
            <View style={{ marginTop: responsiveHeight(2) }}>
              <FlatList
                data={galleryImages}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Image source={item.image} borderRadius={15} style={[styles.imageStyle, { width: item.id == 3 ? responsiveWidth(92) : responsiveWidth(45) }]} />
                )}
              />
            </View>
          </View>
          <View style={{ paddingTop: responsiveHeight(2) }}>
            <Text style={styles.heading}>Services</Text>
            <ServiceCard
              title="Grooming"
              cardStyle={{marginTop: responsiveHeight(2),marginBottom: responsiveHeight(2)}}
              price="$1,499.00"
              frequency="Per day"
              imageUrl="https://your-image-link.com/dog.jpg"
              selected={selected}
              onCardPress={() => navigation.navigate('CreateProfile')}
              
              onPress={() => setSelected(!selected)}
            />
               <ServiceCard
              title="Grooming"
              price="$1,499.00"
              frequency="Per day"
              onCardPress={() => navigation.navigate('CreateProfile')}
              imageUrl="https://your-image-link.com/dog.jpg"
              selected={selected}
              onPress={() => setSelected(!selected)}
            />
          </View>
         <View style={{paddingTop: responsiveHeight(2)}}> 
          <Button handlePress={()=>navigation.navigate('Booking')}  textColor={Colors.white} title='Check Availability' bgColor={Colors.buttonBg}  />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default StoreDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  backImage: {
    height: responsiveHeight(40),
    width: responsiveWidth(105),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: responsiveHeight(7),
  },
  storeView: {
    backgroundColor: '#F5F5F5',
    padding: responsiveHeight(2),
    marginTop: responsiveHeight(35),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  heading: {
    color: Colors.themeText,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
  },
  heartView: {
    backgroundColor: Colors.buttonBg,
    height: responsiveHeight(5),
    width: responsiveHeight(5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingView: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
    height: responsiveHeight(3),
    width: responsiveWidth(15),
    borderRadius: 10,
  },
  ratingText: {
    color: Colors.black,
    fontSize: responsiveFontSize(1.7),
  },
  rating: {
    color: Colors.black,
    fontSize: responsiveFontSize(1.8),
  },
  desc: {
    color: Colors.txtColor,
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveHeight(2.5),
  },
  imageStyle: {
    height: responsiveHeight(20),
    marginBottom: responsiveHeight(2),
    marginHorizontal: responsiveWidth(1),
  },
});

import { View, Text, Image, FlatList, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { BlurView } from "@react-native-community/blur";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../assets/responsive_dimensions';
import { images } from '../../assets/images';

const PetProfile = () => {
  return (
    <View>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View>
        <Image source={images.bulldog} style={{height:responsiveHeight(40), width:responsiveWidth(100)}}/>

            <View style={{padding:20, width:responsiveWidth(90), alignSelf:'center', zIndex:1,  position:'absolute', backgroundColor:"transparent", borderRadius:10, flexDirection:'row', justifyContent:'space-between', bottom:-50}}>

            <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />

                <View >
                        <Text style={{color:"#000000" , fontSize:responsiveFontSize(3), fontWeight:'bold'}}>Itachi</Text>
                        <Text style={{fontSize:responsiveFontSize(2)}}>French Bulldog 1y 4m</Text>
                </View>

                <Image source={images.female}/>
            </View>
        </View>

        <View style={{height:responsiveHeight(10), }}/>

        <View style={{flexDirection:'row', alignItems:'center', width:responsiveWidth(90), alignSelf:'center', gap:10}}>
            <Image source={images.paw} style={{height:responsiveHeight(4), width:responsiveHeight(4)}}/>
            <Text style={{color:"#000000", fontSize:responsiveFontSize(4), fontWeight:'bold'}}>About Itachi</Text>
        </View>

        <FlatList
        data={[1, 2, 3]}
        contentContainerStyle={{width:responsiveWidth(90), alignSelf:'center', marginTop:20 }}

        horizontal
        renderItem={({item})=>{
            return(
                <View style={{padding:20, width:responsiveWidth(30),borderWidth:0.5, borderRadius:10, marginLeft:10, gap:5}}>
                    <Text style={{color:"#A6A6A6", fontSize:responsiveFontSize(2), }}>Weight</Text>
                    <Text style={{color:"#818AF9", fontSize:responsiveFontSize(3), fontWeight:'bold'}}>5,5 kg</Text>
                </View>
            )
        }}
        />

        <Text style={{width:responsiveWidth(90), alignSelf:'center', marginTop:20, fontSize:responsiveFontSize(2), color:"#A6A6A6"}}>My dog is incredibly and unconditionally loyal to me. He loves me as much as I love him or sometimes more.</Text>

        
        <View style={{flexDirection:'row', alignItems:'center', width:responsiveWidth(90), alignSelf:'center', gap:10, marginTop:10}}>
            <Image source={images.smileys} style={{height:responsiveHeight(4), width:responsiveHeight(4)}}/>
            <Text style={{color:"#000000", fontSize:responsiveFontSize(4), fontWeight:'bold'}}>Itachi behavior</Text>
        </View>


        <FlatList
        data={[{id:1, name:"Leash trained"},{id:2, name:"Friendly with cats"},{id:3, name:"Active"},{id:3, name:"Tries to eat things"}]}
        contentContainerStyle={{width:responsiveWidth(90), alignSelf:'center', marginTop:20 , flexWrap:'wrap',gap:10}}

        horizontal
        renderItem={({item})=>{
            return(
                <View style={{padding:10, paddingHorizontal:20, borderWidth:1, borderRadius:1000, marginLeft:10, gap:5, borderColor:"#818AF9"}}>
                    <Text style={{color:"#A6A6A6", fontSize:responsiveFontSize(2), }}>{item.name}</Text>
                </View>
            )
        }}
        />

        <View style={{flexDirection:'row', alignSelf:'center', width:responsiveWidth(90),  marginTop:20, justifyContent:'space-between'}}>
            <Image source={images.dog1} style={{width:responsiveWidth(44), height:responsiveHeight(15),borderRadius:10, overflow:'hidden'}}/>
            <Image source={images.dog2} style={{width:responsiveWidth(44), height:responsiveHeight(15),borderRadius:10, overflow:'hidden'}}/>
        </View>

        <Image source={images.dog3} style={{width:responsiveWidth(90), height:responsiveHeight(15),borderRadius:10, overflow:'hidden', alignSelf:'center', marginTop:10}}/>


        </ScrollView>
    </View>
  )
}

export default PetProfile


const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
    absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      borderRadius:20,
      overflow:'hidden'
    }
  });
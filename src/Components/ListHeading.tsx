import React, { FC } from 'react';
import { View } from 'react-native';
import { responsiveFontSize, responsiveHeight } from '../assets/responsive_dimensions';
import { BoldText, NormalText } from './Titles';
import { Button } from './Button';
import { Colors } from '../assets/colors';

interface ListHeadingProps {
  btnContainer?: boolean;
  title: string;
}

export const ListHeading: FC<ListHeadingProps> = ({
  btnContainer = false, // You can set default value for btnContainer
  title,
}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', gap: responsiveHeight(1.8), alignItems: 'center' }}>
        <BoldText alignSelf='center' fontSize={responsiveFontSize(2.5)} title={title} />

        {btnContainer && (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: responsiveHeight(1) }}>
            <NormalText alignSelf="center" color={Colors.black} title="Ends in" />
            <Button
              borderRadius={responsiveHeight(0.9)}
              alignSelf="center"
              height={responsiveHeight(4.5)}
              width={responsiveHeight(11.3)}
              textFont={responsiveFontSize(2.1)}
              textColor={Colors.white}
              bgColor="#52B4E9"
              title="03:04:18"
            />
          </View>
        )}
      </View>

      <NormalText
        txtDecoration="underline"
        fontWeight="800"
        fontSize={responsiveFontSize(2.1)}
        color={Colors.themeText}
        alignSelf="center"
        title="See All"
      />
    </View>
  );
};

export default ListHeading;

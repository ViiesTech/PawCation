import { Text } from 'react-native';
import { responsiveFontSize } from '../assets/responsive_dimensions';
import { Colors } from '../assets/colors';

interface textProps {
  // fontSize: string;
  // fontWeight: string;
  color: string;
  title: string;
  alignSelf: string;
  txtAlign: string;
  fontWeight: string;
  mrgnTop: number;
  fontSize: number;
  color: string;
}

export const BoldText = ({ title, txtAlign, mrgnTop, fontSize, alignSelf, color }: textProps) => {
  return (
    <Text
      style={{
        fontSize: fontSize ? fontSize : responsiveFontSize(2.7),
        fontWeight: '900',
        marginTop: mrgnTop,
        color: color ? color : Colors.themeText,
        alignSelf: alignSelf ? alignSelf : 'center',
        textAlign: txtAlign,
      }}>
      {title}
    </Text>
  );
};
export const NormalText = ({ title, color, alignSelf, txtAlign, fontWeight, fontSize }: textProps) => {
  return (
    <Text
      style={{
        fontSize: fontSize ? fontSize : responsiveFontSize(1.9),
        fontWeight: fontWeight ? fontWeight : '500',
        color: color,
        textAlign: txtAlign,
        alignSelf: alignSelf,

      }}>
      {title}
    </Text>
  );
};

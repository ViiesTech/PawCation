import {Text} from 'react-native';
import {responsiveFontSize} from '../assets/responsive_dimensions';
import {Colors} from '../assets/colors';

interface textProps {
  // fontSize: string;
  // fontWeight: string;
  color: string;
  title: string;
  alignSelf:string
}

export const BoldText = ({title,}: textProps) => {
  return (
    <Text
      style={{
        fontSize: responsiveFontSize(2.7),  
        fontWeight: '900',
        color: Colors.themeText,
        alignSelf: 'center',
      }}>
      {title}
    </Text>
  );
};
export const NormalText = ({title,color,alignSelf}: textProps) => {
  return (
    <Text
      style={{
        fontSize: responsiveFontSize(1.9),
        fontWeight: '500',
        color: color,
        alignSelf:alignSelf
      }}>
      {title}
    </Text>
  );
};

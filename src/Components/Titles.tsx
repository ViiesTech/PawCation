import {Text} from 'react-native';
import {responsiveFontSize} from '../assets/responsive_dimensions';
import {Colors} from '../assets/colors';

interface textProps {
  // fontSize: string;
  // fontWeight: string;
  color: string;
  title: string;
  alignSelf:string;
  txtAlign:string;
  fontWeight:string;
  mrgnTop:number;
}

export const BoldText = ({title,txtAlign,mrgnTop}: textProps) => {
  return (
    <Text
      style={{
        fontSize: responsiveFontSize(2.7),  
        fontWeight: '900',
        marginTop:mrgnTop,
        color: Colors.themeText,
        alignSelf: 'center',
        textAlign:txtAlign
      }}>
      {title}
    </Text>
  );
};
export const NormalText = ({title,color,alignSelf,txtAlign,fontWeight}: textProps) => {
  return (
    <Text
      style={{
        fontSize: responsiveFontSize(1.9),
        fontWeight: fontWeight ? fontWeight : '500',
        color: color,
        textAlign:txtAlign,
        alignSelf:alignSelf,
        
      }}>
      {title}
    </Text>
  );
};

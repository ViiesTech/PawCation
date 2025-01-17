import * as React from 'react';
import {SvgFromXml} from 'react-native-svg';

interface svgprops {
  width: number,
  height: number,
  xml: string,
  color: string
}

export default ({width,height,xml,color}: svgprops) => (
  <SvgFromXml color={color} width={width} height={height}  xml={xml}/>
);

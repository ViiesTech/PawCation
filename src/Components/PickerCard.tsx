import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { responsiveHeight, responsiveWidth } from '../assets/responsive_dimensions';
const PickerCard = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([
    { label: 'Service 1', value: 'service1' },
    { label: 'Service 2', value: 'service2' },
    { label: 'Service 3', value: 'service3' },
  ]);
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select Service"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.textStyle}
        zIndex={1000}
      />
      {value && <Text style={styles.selectedText}>Selected: {value}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 3,
  },
  dropdown: {
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#ccc',
    borderRadius: 8,
    height: responsiveHeight(2.5),
    width: responsiveWidth(91)
  },
  dropdownContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textStyle: {
    fontSize: 16,
    color: '#aaa',
  },
  selectedText: {
    marginTop: 10,
    fontSize: 16,
    color: '#aaa',
  },
});
export default PickerCard;
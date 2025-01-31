import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { SvgXml } from "react-native-svg";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../assets/responsive_dimensions";
import { Colors } from "../assets/colors";

const calendarIcon = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 17H5V8h14v12zM7 10h5v5H7z"/>
</svg>
`;

const CalendarCard = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const showCalendar = () => {
    setCalendarVisible(true);
  };

  const hideCalendar = () => {
    setCalendarVisible(false);
  };

  const handleDateChange = (date: any) => {
    const formattedDate = console.log(date)
    // setSelectedDate(formattedDate);
    hideCalendar();
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.datePicker} onPress={showCalendar}>
        <Text style={[styles.dateText, !selectedDate && styles.placeholder]}>
          {selectedDate || "Select Date"}
        </Text>
        <SvgXml xml={calendarIcon} height={20} width={20} />
      </TouchableOpacity>
      <Modal
        visible={isCalendarVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={hideCalendar}
      >
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <CalendarPicker
              onDateChange={handleDateChange}
              selectedDayColor={Colors.buttonBg}
              selectedDayTextColor={Colors.white}
              todayBackgroundColor={Colors.buttonBg}
            />
            <TouchableOpacity onPress={hideCalendar} style={styles.confirmButton}>
              <Text style={styles.closeButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
    width: responsiveWidth(91),
    justifyContent: "space-between",
    backgroundColor: "#DADADA",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  dateText: {
    fontSize: 16,
    color: "#000",
  },
  placeholder: {
    color: "#aaa",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: responsiveHeight(2.5),
    width: responsiveWidth(95),
  },
  confirmButton: {
    marginTop: 20,
    alignSelf: "center",
    padding: responsiveHeight(1.7),
    alignItems: 'center',
    width: responsiveWidth(80),
    borderRadius: 10,
    backgroundColor: Colors.buttonBg,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: responsiveFontSize(2)
  },
});

export default CalendarCard;

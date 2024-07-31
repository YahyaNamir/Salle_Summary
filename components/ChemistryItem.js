import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function ChemistryItem({ chemistry }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={{fontFamily: 'Poppins-Bold', marginLeft: 5}} >{chemistry.name}</Text>
      <Text style={{fontFamily: 'Poppins-Bold', marginLeft: 5}} >{chemistry.minutePlayer}</Text>
      <Text style={{fontFamily: 'Poppins-Bold', marginLeft: 5}} >{chemistry.goal}</Text>
      <Text style={{fontFamily: 'Poppins-Bold', marginLeft: 5}} >{chemistry.receivedGoal}</Text>
      {/* <Text style={{fontFamily: 'Poppins-Bold', marginLeft: 5}} >{chemistry.yellowCard}</Text> */}
      {/* <Text style={{fontFamily: 'Poppins-Bold', marginLeft: 5}} >{chemistry.redCard}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

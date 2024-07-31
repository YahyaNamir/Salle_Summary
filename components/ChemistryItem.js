import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function ChemistryItem({ chemistry }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={chemistry.picture} style={styles.picture} />
      <Text style={styles.name}>{chemistry.name}</Text>
      <Text style={styles.text}>{chemistry.minutePlayer}</Text>
      <Text style={styles.text}>{chemistry.goal}</Text>
      <Text style={styles.text}>{chemistry.receivedGoal}</Text>
      <Text style={styles.text}>{chemistry.yellowCard}</Text>
      <Text style={styles.text}>{chemistry.redCard}</Text>
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
  picture: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    width: 92, 
    textAlign: 'left',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    width: 50, 
    textAlign: 'center',
  },
});

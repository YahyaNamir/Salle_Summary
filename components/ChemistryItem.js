import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function ChemistryItem({chemistry}) {
  return (
    <View style={styles.itemContainer}>
      <Image source={chemistry.picture} style={styles.picture} />
      <Text style={styles.name}>{chemistry.name}</Text>
      <Text style={styles.text}>{chemistry.minutePlayer}</Text>
      <Text style={styles.text}>{chemistry.goal}</Text>
      <Text style={styles.text}>{chemistry.receivedGoal}</Text>
      <Text style={styles.text}>{chemistry.yellowCard}</Text>
      <Text style={styles.text}>{chemistry.redCard}</Text>
      <Text style={styles.text}>{chemistry.foulCommitted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  picture: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 8,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    width: 122,
    fontSize: 12,
    textAlign: 'left',
    color: "#272626",
  },
  text: {
    fontFamily: 'Poppins-Bold',
    width: 40,
    fontSize: 12,
    textAlign: 'center',
    color: "black",
  },
});

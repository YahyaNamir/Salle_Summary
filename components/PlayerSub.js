import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlayerSub = ({ player }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeIn}>{player.timeIn}</Text>
      <Image source={player.photo} style={styles.photo} />
      <Text style={styles.name}>{player.name}</Text>
      <Text style={[styles.icon, styles.position]}>{player.position}</Text>
      <Icon name="arrow-up" size={30} color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center', 
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: 10, 
  },
  timeIn: {
    fontFamily: 'Poppins-Regular',
    borderWidth: 1,
    borderColor: '#c2c210',
    fontSize: 15,
    color: '#333',
    width: 40,
    height: 30, 
    borderRadius: 10,
    textAlign: 'center', 
    lineHeight: 30, 
    marginHorizontal: 10, 
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#000',
    marginHorizontal: 10, 
  },
  icon: {
    marginLeft: 4,
    fontSize: 10,
    padding: 5,
    width: 28,
    borderRadius: 5,
    textAlign: 'center',
  },
  position: {
    backgroundColor: '#c1c416b4',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
});

export default PlayerSub;

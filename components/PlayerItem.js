import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlayerItem = ({ player }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>{player.id}</Text>
      <Image source={player.photo} style={styles.photo} />
      <View style={styles.info}>
        <Text style={styles.name}>{player.name}</Text>
      </View>
      <View style={styles.icons}>
        <Text style={[styles.icon, styles.gk]}>{player.position}</Text>
        <Text style={[styles.icon, styles.timeIn]}>🟢 {player.timeIn}</Text>
        {/* <Text style={[styles.icon, styles.timeOut]}>🔴 {player.timeOut}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center', 
    fontFamily : 'Poppins-Regular',
  },
  id: {
    fontFamily : 'Poppins-ExtraBold',
    fontSize: 14,
    color: '#333',
    width: 25, 
  },
  name: {
    fontFamily : 'Poppins-Regular',
    fontSize: 15,
    color: '#000',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 4,
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  timeIn: {
    backgroundColor: '#e0ffe0',
    color: '#00a000',
    fontFamily : 'Poppins-Regular',
  },
  timeOut: {
    backgroundColor: '#ffe0e0',
    color: '#a00000',
    fontFamily : 'Poppins-Regular',
  },
  gk: {
    backgroundColor: '#c1c416b4',
    color: '#000000',
    fontFamily : 'Poppins-Regular',
  },
});

export default PlayerItem;

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlayerSub = ({ substitution }) => {
  return (
    <View style={styles.container}>
      <View style={styles.playerOutContainer}>
        <View style={styles.playerInfo}>
          <Image source={substitution.playerOut.photo} style={styles.photo} />
          <Text style={styles.name}>{substitution.playerOut.name}</Text>
          <Text style={[styles.icon, styles.position]}>{substitution.playerOut.position}</Text>
          <Icon name="arrow-downward" size={20} color="#ff0000" />
        </View>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>{substitution.time}</Text>
      </View>

      <View style={styles.playerInContainer}>
        <View style={styles.playerInfo}>
          <Image source={substitution.playerIn.photo} style={styles.photo} />
          <Text style={styles.name}>{substitution.playerIn.name}</Text>
          <Text style={[styles.icon, styles.position]}>{substitution.playerIn.position}</Text>
          <Icon name="arrow-upward" size={20} color="#00b53f" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    width: '100%',
  },
  playerOutContainer: {
    width: '100%',
    alignItems: 'center',
  },
  playerInContainer: {
    width: '100%',
    alignItems: 'center',
  },
  timeContainer: {
    borderWidth: 1,
    borderColor: '#b9b904',
    width: '20%',
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
    marginHorizontal: 5,
  },
  icon: {
    fontSize: 10,
    padding: 2,
    width: 20,
    marginLeft: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  position: {
    backgroundColor: '#c1c416b4',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    padding:2,
    width:30,
  },
  time: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#000000',
  },
});

export default PlayerSub;

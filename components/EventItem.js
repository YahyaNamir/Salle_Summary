import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EventItem = ({ iconName, iconColor, event, player, position, time, backgroundColor }) => {
  return (
  
    <View style={[styles.itemContainer, { backgroundColor }]}>
      <Icon name={iconName} size={20} color={iconColor} style={styles.icon} />
      <Text style={styles.event}>{event}</Text>
      <Text style={styles.player}>{player}</Text>
      {player != 'ADVERSAIRE' && <Text style={styles.position}>{position}</Text>} 
      <View style={[styles.timeContainer, player == 'ADVERSAIRE' && {marginLeft: 50}]}>
        <Icon name="timer" size={15} color="#000000" style={styles.timeIcon} />
        {/* <Text style={styles.line}>|</Text> */}
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  icon: {
    marginRight: 5,
    width: 20,
    textAlign: 'center',
  },
  event: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    minWidth: 98,
  },
  player: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    minWidth: 150,
  },
  position: {
    backgroundColor: '#c7cb05',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    borderRadius: 5,
    textAlign: 'center',
    minWidth: 40,
    marginRight: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeIcon: {
    marginRight: 4,
  },
  time: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: 'black',
    minWidth: 50,
    textAlign: 'center',
  },
  line: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: 'black',
  },
});

export default EventItem;
  
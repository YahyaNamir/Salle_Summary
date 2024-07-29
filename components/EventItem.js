import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EventItem = ({ iconName, iconColor, event, player, position, time, backgroundColor }) => {
  return (
    <View style={[styles.itemContainer, { backgroundColor }]}>
      <Icon name={iconName} size={20} color={iconColor} style={styles.icon} />
      <Text style={styles.event}>{event}</Text>
      <Text style={styles.player}>{player}</Text>
      <Text style={styles.position}>{position}</Text>
      <View style={styles.timeContainer}>
        <Icon name="access-time" size={15} color="#000000" style={styles.timeIcon} />
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 8,
    marginVertical: 4,
  },
  icon: {
    marginRight: 8,
  },
  event: {
    flex: 2,
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  player: {
    flex: 3,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  position: {
    flex: 1,
    backgroundColor: '#d0d30e',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    paddingHorizontal: 4,
    borderRadius: 5,
    textAlign: 'center',
    marginRight: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  timeIcon: {
    marginRight: 4,
  },
  time: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: 'black',
  },
});

export default EventItem;

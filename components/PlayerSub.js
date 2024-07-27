import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlayerSub = ({substitution}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row-reverse',
        //   justifyContent: 'space-between',
        //   width: '100%',
          alignItems: 'center',
        }}>
        <View>
          <View style={styles.playerOutContainer}>
            <View style={styles.playerInfo}>
              <Image
                source={substitution.playerOut.photo}
                style={styles.photo}
              />
              <View style={styles.aligned}>
                <View>
                  <Text style={styles.name}>{substitution.playerOut.name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.icon, styles.position]}>
                    {substitution.playerOut.position}
                  </Text>
                  <Icon name="arrow-downward" size={20} color="#ff0000" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.playerInContainer}>
            <View style={styles.playerInfo}>
              <Image
                source={substitution.playerIn.photo}
                style={styles.photo}
              />
              <View style={styles.aligned}>
                <View>
                  <Text style={styles.name}>{substitution.playerIn.name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.icon, styles.position]}>
                    {substitution.playerIn.position}
                  </Text>
                  <Icon name="arrow-upward" size={20} color="#33ff00" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{substitution.time}</Text>
          <Icon name="access-time" size={20} color="#000000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // alignItems: 'center',
    paddingVertical: 8,
    width: '100%',
    // marginLeft: 10,
  },
  playerOutContainer: {
    marginLeft: 35,
    width: '80%',
  },
  aligned: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  playerInContainer: {
    marginLeft: 35,
    width: '80%',
  },
  timeContainer: {
    borderWidth: 1,
    borderColor: '#b9b904',
    // width: '20%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    // maxWidth:600,
    // minWidth: 200,
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
    padding: 2,
    width: 30,
  },
  time: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#000000',
    marginRight: 5,
  },
});

export default PlayerSub;

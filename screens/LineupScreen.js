import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const positions = {
  GK: { top: '10%', right: '-7%' },
  LB: { top: '29%', left: '20%' },
  RB: { top: '29%', right: '20%' },
  LM: { top: '52%', left: '30%' },
  RM: { top: '52%', right: '30%' },
};

const players = [
  { id: '1', name: 'ANBIA', position: 'GK' },
  { id: '2', name: 'EL MESRAR', position: 'LB' },
  { id: '3', name: 'EL AYAN', position: 'RB' },
  // { id: '4', name: 'CHARAOUI', position: 'LM' },
  { id: '5', name: 'EL KHADIR', position: 'RM' },
];

const LineupScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('../assets/images/stade.png')}>
        <View style={styles.content}>
          {players.map(player => (
            <View
              key={player.id}
              style={[
                styles.circle,
                {
                  top: positions[player.position].top,
                  left: positions[player.position].left,
                  right: positions[player.position]?.right,
                },
              ]}
            >
              <Text style={styles.positionText}>{player.position}</Text>
              <Text style={styles.nameText}>{player.name}</Text>
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    
  },
  circle: {
    position: 'absolute',
    width: 72,
    height: 72,
    borderRadius: 50,
    backgroundColor: '#e3eff4cd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000083',
    padding: 5,
  },
  positionText: {
    position: 'absolute',
    top: -17,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-ExtraBold',
    margin: -5,
  },
  nameText: {
    fontSize: 11,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
});

export default LineupScreen;

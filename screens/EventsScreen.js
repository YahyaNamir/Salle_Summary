import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Events Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default EventsScreen;
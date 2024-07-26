import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubsScreen = () => {
  return (
    <View style={styles.container}>
      <Text >Subs Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Regular-Bold',
  },
  Text: {
    fontFamily: 'Regular-Bold',
  },
});

export default SubsScreen;

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            // key={route.key}
            onPress={onPress}
            style={[styles.tab, isFocused ? styles.focusedTab : null]}
          >
            <Text  style={[styles.tabText, isFocused ? styles.tabTextFocus : null]}
            >{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height :24,
    margin:20,
    flexDirection: 'row',
    borderWidth:1,
    borderRadius: 50,
  },
  tab: {
    alignItems: 'flex-start',
    alignContent: 'space-between',
    marginLeft: 20,
  },
  tabText: {
    color: '#000000',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  tabTextFocus: {
    color: '#b49718',
    fontSize: 15,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
  },
});

export default CustomTabBar;

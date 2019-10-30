import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemSlider from './src/slider/ItemSlider';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.otherView}>
        <ItemSlider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherView: {
    alignItems: "stretch",
    alignSelf: 'stretch',
  }
});

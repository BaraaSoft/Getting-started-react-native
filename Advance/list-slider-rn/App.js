import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemSlider from './src/slider/ItemSlider';
import { Slider } from './src/slider/Slider';

export default function App() {
  const renderItem = function () {
    return <ItemSlider />
  }
  return (
    <View style={styles.container}>
      <View style={styles.otherView}>
        <Slider data={[1]} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherView: {
    alignItems: "stretch",
    alignSelf: 'stretch',
  }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './TabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});

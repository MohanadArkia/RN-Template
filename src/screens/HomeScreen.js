import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenNames from '../../route/ScreenNames';

const HomeScreen = props => {
  const onContactBtnPress = () => {
    props.navigation.navigate(ScreenNames.Contact);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home Screen</Text>
      <Button title="Contact Screen" onPress={onContactBtnPress} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  txt: {
    color: 'black',
    fontSize: 20,
    marginBottom: 50,
  },
});

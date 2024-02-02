import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Email: test@test.com</Text>
      <Text style={styles.txt}>Phone: (123) 456-789</Text>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  txt: {
    color: 'black',
    fontSize: 25,
  },
});

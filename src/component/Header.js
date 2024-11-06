import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = ({title, icon}) => {
  return (
    <View style={styles.header}>
     
        <TouchableOpacity style={styles.backbtn} underlayColor="red">
          <Image
            source={icon}
            style={styles.back}
          />
        </TouchableOpacity>
      
      <Text style={[styles.title,{marginLeft:10}]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    paddingLeft: 10,
  },
  back: {
    width: 30,
    height: 30,
  },
  backbtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    // marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});

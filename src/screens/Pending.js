import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/Header';

const Pending = () => {
  return (
    <View style={styles.container}>
      <Header
        icon={require('../../assets/back.png')}
        title={'Completed Appointments'}
      />
      <View>
        <FlatList
          data={[1, 1, 1, 1, 1]}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemView}>
                <Image
                  source={require('../../assets/doctor.png')}
                  style={styles.docImg}
                />
                <View>
                  <Text style={styles.name}>{'Doctor XYZ'}</Text>
                  <Text style={styles.time}>{'08:10PM'}</Text>
                </View>
                <Text style={styles.status}>Pending</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Pending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  time:{
    fontSize:16,
    marginLeft:20,
    marginTop:5
  },
  status:{
    marginLeft:60,
    borderRadius:10,
    backgroundColor:'#f2f2f2',
    padding:5,
    color:'orange'
  }
});

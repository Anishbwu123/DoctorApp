import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../component/Header';
import CommonBtn from '../component/CommonBtn';
let Dayslist = [];

const BookAppointment = ({navigation}) => {
  const [selectedslot, setselectedslot] = useState(null); // Start with `null` if no slot is selected
  const [selectedgender, setselectedgender] = useState(null); // Start with `null`
  const [selectedday, setselectedday] = useState(-1);
  const [slots, setslots] = useState([
    {time: '10:00-12:00PM', selected: false},
    {time: '12:00-02:00PM', selected: false},
    {time: '02:00-04:00PM', selected: false},
    {time: '04:00-06:00PM', selected: false},
    {time: '06:00-08:00PM', selected: false},
    {time: '08:00-11:00PM', selected: false},
  ]);
  const[days,setdays]=useState([])
  useEffect(() => {
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      Dayslist.push({day: i, selected: false});
    }
    setdays(Dayslist);
  }, []);

  const getDays = month => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 31;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 31;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 31;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 31;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 31;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };

  //   const setselectedslot = (index) => {
  //     setslectedslot(index);
  //     setslots(slots.map((slot, i) => ({
  //       ...slot,
  //       selected: i === index,
  //     })));
  //   };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.container}>
        <Header
          icon={require('../../assets/back.png')}
          title={'Book Appointment'}
        />
        <Image
          source={require('../../assets/doctor.png')}
          style={styles.docImg}
        />
        <Text style={styles.docName}>Doctor Bhowmick</Text>
        <Text style={styles.spcl}>Skin Specialist</Text>
        <Text style={styles.heading}>Select Date</Text>
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={days}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 70,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: selectedday == index ? 'blue' : '#fff',
                    borderWidth: selectedday == index ? 0 : 1,
                    marginLeft: 10,
                  }}
                  onPress={() => {
                    if (item.day < new Date().getDate()) {
                    } else {
                      setselectedday(index);
                    }
                  }}>
                  <Text style={{color: selectedday == index ? '#fff' : 'blue'}}>
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Available Slots</Text>
        <FlatList
          numColumns={2}
          data={slots}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.timeSlot,
                {borderColor: selectedslot === index ? 'blue' : 'black'},
              ]}
              onPress={() => setselectedslot(index)}>
              <Text
                style={{
                  color: selectedslot === index ? 'blue' : 'black',
                }}>
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
          scrollEnabled={false}
          nestedScrollEnabled={true}
        />
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput style={styles.nameInput} placeholder="Enter your name" />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.viewGender}>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedgender == 0 ? 'blue' : 'black',
              },
            ]}
            onPress={() => setselectedgender(0)}>
            <Image
              source={require('../../assets/male.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedgender == 1 ? 'blue' : 'black',
              },
            ]}
            onPress={() => setselectedgender(1)}>
            <Image
              source={require('../../assets/female.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnView}>
          <CommonBtn w={300} h={45} txt={'Book Now'} status={true} onClick={()=>{
            navigation.navigate('Success')
          }}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  docImg: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  docName: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  spcl: {
    fontSize: 15,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    color: 'green',
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 15,
    marginLeft: 15,
  },
  timeSlot: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    height: 45,
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  viewGender: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gender: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnView: {
    marginTop: 20,
    marginBottom: 20,
  },
});

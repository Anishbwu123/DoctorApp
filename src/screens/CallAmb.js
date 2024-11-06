import { Linking, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import CommonBtn from '../component/CommonBtn'

const CallAmb = () => {
    const makecall=()=>{
        let ph=''
        if(Platform.OS==='android'){
            ph='tel:$(102)'
        }
        else{
            ph='telpromt:${102}'
        }
        Linking.openURL(ph)
    }
  return (
    <View style={styles.container}>
      <Header icon={require('../../assets/back.png')} title={'Call Ambulance'}/>
      <TextInput placeholder='Address' style={styles.address}/>
      <CommonBtn w={200} h={50} txt={'Call Now'} status={true} onPress={()=>{
            makecall();
      }}/>
    </View>
  )
}

export default CallAmb

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    address:{
        height:50,
        width:'90%',
        borderWidth:0.5,
        borderRadius:10,
        marginTop:50,
        alignSelf:'center',
        paddingLeft:20
    }
})
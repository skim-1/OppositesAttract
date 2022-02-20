import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Button } from 'react-native';

import axios from 'axios';
import { Entypo, MaterialIcons, FontAwesome, Fontisto  } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Accept.styles.js';


export default function Friends({navigation}) {
  const [test, settest] = useState([])

  useEffect( () => {
    (async () => {
      const temp = JSON.parse(await AsyncStorage.getItem("@friends"));
      settest(temp.friends);
    })();
  }, [])

  return (
    <View style={styles.body}>

      <View style={styles.BodyContainer}>
        <View style={{paddingTop: 50}}/>

        <Text style={styles.Header}>
          {"Your Friends"}
        </Text>

        <ScrollView style={styles.rList}>

          {
            test.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.boxes}>
                  <Image
                    style={styles.profpic}
                    source={{
                      uri: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
                    }}
                  />

                  <Text style={styles.Lname}>
                    {item.name}
                  </Text>

                </TouchableOpacity>
              )
            })
          }

        </ScrollView>

      </View>

      <View style={styles.Footer}>

        <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={30} color="white"/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons}>
          <FontAwesome name="user-plus" size={30} color="white" onPress={() => navigation.navigate('Accept')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons}>
          <MaterialIcons name="account-box" size={30} color="white" onPress={() => navigation.navigate('Survey')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons}>
          <Fontisto name="persons" size={30} color="white" onPress={() => navigation.navigate('Friends')}/>
        </TouchableOpacity>

      </View>

    </View>
  )
}

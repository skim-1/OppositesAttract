import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Button, Image } from 'react-native';

import { Fontisto, Entypo, MaterialIcons, FontAwesome  } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Home.styles.js';
import axios from 'axios';

export default function Home({navigation}) {
  const [cin, setcin] = useState(0);
var users=[]
  useEffect( () => {
    (async () => {
      const isNew = await AsyncStorage.getItem('@userprofile');
      if(isNew == null) {
        AsyncStorage.setItem('@friends', '{"friends":[]}');
        //navigation.navigate('Survey');
      }
      console.log(isNew);

      // await axios
      //   .post('http://192.168.1.168:5000/friends', JSON.parse(isNew))
      //   .then(d=> data = d).then(d => {
      //     console.log(data);
      //     // const user = data.users;
      //   })


      // var cindex = 0;
      // user.map((item, index) => {
      //   user.map((item, index) => {
      //     if(item.order == cindex) {
      //       users.push(item);
      //     }
      //   })
      //   cindex = cindex + 1;
      // })
    })();
  }, [])

  return(
    <View style={styles.Body}>
      <View style={styles.BodyContainer}>


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

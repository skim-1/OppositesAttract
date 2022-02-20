import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Button } from 'react-native';

import { Fontisto, Entypo, MaterialIcons, FontAwesome  } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Accept.styles.js';


export default function Requests({navigation}) {
  const [test, settest] = useState([
      {
         "age":"69",
         "answers":[
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2"
         ],
         "bio":"I have a tromboner",
         "name":"Reuben Sanabria",
         "phone":"6906906969",
         "school":"Klein cain"
      },
      {
         "age":"69",
         "answers":[
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2"
         ],
         "bio":"I have a tromboner",
         "name":"Reuben",
         "phone":"6906906969",
         "school":"Klein cain"
      },
      {
         "age":"69",
         "answers":[
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2",
            "3",
            "1",
            "1",
            "2"
         ],
         "bio":"I have a tromboner",
         "name":"Reuben",
         "phone":"6906906969",
         "school":"Klein cain"
      }
   ])

  const declineHandler = ( index ) => {
    settest(test.filter((item, jindex) => index !== jindex));
  }

  const acceptHandler = async ( index ) => {
    var fris = JSON.parse(await AsyncStorage.getItem('@friends'));

    fris.friends.push(test[index]);
    declineHandler(index);
    console.log(fris);
    AsyncStorage.setItem("@friends", JSON.stringify(fris));

  }

  return (
    <View style={styles.body}>

      <View style={styles.BodyContainer}>
        <View style={{paddingTop: 50}}/>

        <Text style={styles.Header}>
          {"Your Friend Requests"}
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

                  <TouchableOpacity style={styles.ansbutton} onPress={() => acceptHandler(index)}>
                    <Text style={styles.atext}>{"Accept"}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.decbutton} onPress={() => declineHandler(index)}>
                    <Text style={styles.atext}>{"Decline"}</Text>
                  </TouchableOpacity>

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

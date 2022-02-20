import React, {useState, useEffect} from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback, Text, View, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';

import axios from 'axios';
import { Fontisto, Entypo, MaterialIcons, FontAwesome  } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Survey.styles.js';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Survey({navigation}) {
  const [qList, qhandler] = useState(["You dislike large social gatherings compared to smaller groups",
                 "Reading and learning new information are important to you",
                 "You are constantly trying new things and being experimental",
                 "Meeting new people is something that you enjoy",
                 "You enjoy partaking in physical activities such as sports",
                 "You tend to view the world creatively, as opposed to analytically",
                 "You spend much of your time on social media",
                 "Instead of putting thought into outfits, you throw on whatever you can",
                 "You are a pessimistic person",
                 "You find it important to save time for yourself and your mental health",
                 "You get bored easily",
                 "You are a competitive person",
                 "You believe that the world always has room to become better",
                 "You are organized and meticulous",
                 "Helping others is unimportant to you",
                 "Your decisions are spontaneous rather than calculated and planned out",
                 "You find it easy to become the leader in group activities",
                 "Humans are innately good",
                 "It is difficult for you to ask for help"
                 ]);
  const [aList, setAns] = useState([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [pnum, setpnum] = useState("");
  const [img, setImg] = useState("");

  useEffect( () => {
    (async () => {
      const profile = JSON.parse(await AsyncStorage.getItem('@userprofile'));
      console.log(profile);
      if(profile !== null) {
        setAns(profile.answers);
        setName(profile.name);
        setSchool(profile.school);
        setBio(profile.bio);
        setpnum(profile.phone);
        setAge(profile.age);
        setImg(profile.imgurl)
      }

      console.log(getJSON());
    })();
  }, [])

  const SubmitHandler = async () => {
    //write submit code once sheehan finishes and aneesh finishes

    if(name == "") {
      alert("Please fill all the fields!");
      return 0;
    }

    if(school == "") {
      alert("Please fill all the fields!");
      return 0;
    }

    if(bio == "") {
      alert("Please fill all the fields!");
      return 0;
    }

    if(age == "") {
      alert("Please fill all the fields!");
      return 0;
    }

    if(pnum == "") {
      alert("Please fill all the fields!");
      return 0;
    }

    aList.map((item, index) => {
      if(item == null) {
        alert("Please answer all the questions!");
        return 0;
      }
    })
    try {
      await AsyncStorage.setItem('@userprofile', JSON.stringify(getJSON()));
    }
    catch (e) {
      console.log(e);
    }

    await axios.post("http://192.168.1.168:5000/edit-profile", getJSON());
  }

  const getJSON = () => {
    return {
      "name" : name,
      "age" : parseInt(age),
      "school" : school,
      "bio" : bio,
      "phone" : parseInt(pnum),
      "answers" : aList,
      "imgUrl": img,
    }
  }

  const rate_handler = async (index, val) => {
    const rates = aList;
    rates[index] = val;
    setAns(rates);
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.body}>
        <View style={styles.BodyContainer}>
          <View style={{paddingTop: 50}}/>

          <ScrollView style={styles.questionbody}>

            <View style={styles.formheader}>

              <Text style={styles.Header}>
                {"Your Profile"}
              </Text>

              <View style={{paddingTop: 10}}/>

              <View style={styles.inbox}>
                <Text style={styles.formText}>{"Name: "}</Text>
                <TextInput style={styles.inform} value={name} onChangeText={text => setName(text)}/>
              </View>

              <View style={styles.inbox}>
                <Text style={styles.formText}>{"Phone Number: "}</Text>
                <TextInput style={styles.inform} keyboardType="numeric" value={pnum} onChangeText={text => setpnum(text)}/>
              </View>

              <View style={styles.inbox}>
                <Text style={styles.formText}>{"School: "}</Text>
                <TextInput style={styles.inform} value={school} onChangeText={text => setSchool(text)}/>
              </View>

              <View style={styles.inbox}>
                <Text style={styles.formText}>{"Age: "}</Text>
                <TextInput style={styles.inform} value={age} keyboardType="numeric" onChangeText={text => setAge(text)}/>
              </View>

              <View style={styles.inbox}>
                <Text style={styles.formText}>{"Bio: "}</Text>
                <TextInput style={styles.inform} value={bio} onChangeText={text => setBio(text)}/>
              </View>

              <View style={styles.inbox}>
                <Text style={styles.formText}>{"Profile Picture: "}</Text>
                <TextInput style={styles.inform} value={img} onChangeText={text => setImg(text)}/>
              </View>

            </View>

            <Text style={styles.surhead}>{"Personality Survey"}</Text>
            <Text style={styles.surtext}>{"For each question, answer a number 1-10, 10 meaning that you strongly agree and 1 meaning you strongly disagree"}</Text>

            {
              qList.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.qbox} key={index}>
                    <Text style={styles.question}>{item}</Text>

                    <TextInput style={styles.aform} value={aList[index]} keyboardType="numeric" onChangeText={text => rate_handler(index, text)}/>

                  </TouchableOpacity>
                )
              })
            }

            <TouchableOpacity style={styles.subbutt} onPress={() => SubmitHandler()}>
              <Text style={styles.subtext}>{"Submit"}</Text>
            </TouchableOpacity>

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
    </TouchableWithoutFeedback>

  )
}

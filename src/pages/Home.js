import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,

} from 'react-native';
import { Button, RedButton } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkill] = useState([]);
  const [gretting, setGrettings]= useState('');

  useEffect(()=>{
      const currentHour= new Date().getHours();
      
      if(currentHour < 12){
        setGrettings('Good Morning')
      }else if(currentHour >= 12 && currentHour <18){
        setGrettings('Good Afternon')
      }else{
        setGrettings('Good Night')
      }
  },[])

  function handleAddNewSkill() {

    setMySkill(oldState => [...mySkills,newSkill])

  }


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Welcome,Carloss !
        </Text>
        <Text style={styles.greetings}>
          {gretting}
        </Text>

      <TextInput
        style={styles.input}
        placeholder="Skills"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />


      <Button onPress={handleAddNewSkill} />
      


      <Text
        style={[styles.title, styles.secondTitle, { marginTop: 15 }]}
      >
        My skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />



    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 12,
    paddingHorizontal: 25,
    paddingVertical: 30,
    backgroundColor: "#121015"
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
  },
  input: {
    color: '#fff',
    backgroundColor: '#1f1e25',
    borderRadius: 8,
    marginTop: 12,
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 16 : 14,
  },

  secondTitle: {

    paddingBottom: 6,
    borderStyle: 'solid',
    borderBottomWidth: 4,
    borderColor: '#a370f7'
  },
  greetings:{
    color: '#fff'
  }

})



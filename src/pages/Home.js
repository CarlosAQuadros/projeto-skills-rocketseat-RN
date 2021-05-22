import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,

} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkill] = useState([])

  function handleAddNewSkill() {

    setMySkill(oldState => [...oldState, newSkill])


  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Welcome,Carloss !
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
  }

})



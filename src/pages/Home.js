import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity
} from 'react-native';

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


      <TouchableOpacity
        onPress={handleAddNewSkill}
        activeOpacity={0.3}
        style={styles.buton}>

        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Add</Text>
      </TouchableOpacity>


      <Text
        style={[styles.title, styles.secondTitle,{ marginTop: 15 }]}
      >
        My skills
      </Text>


      {
        mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.skill}>
              {skill}

            </Text>
          </TouchableOpacity>
        ))
      }
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
  buton: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 8,
    marginTop: 14,
    alignItems: 'center',
  },
  secondTitle: {

    paddingBottom: 6,
    borderStyle: 'solid',
    borderBottomWidth: 4,
    borderColor: '#a370f7'
  },
  buttonSkill: {
    color: '#fff',
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 40,
    marginVertical: 8,
  },
  skill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',


  }

})



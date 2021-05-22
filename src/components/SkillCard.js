import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'


export function SkillCard({skill}) {

    return (


        <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
             {skill}
            </Text>
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({

    buttonSkill: {
      color: '#fff',
      backgroundColor: '#1f1e25',
      padding: 15,
      borderRadius: 40,
      marginVertical: 8,
    },
    textSkill: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
  
  
    }
  
  })
  
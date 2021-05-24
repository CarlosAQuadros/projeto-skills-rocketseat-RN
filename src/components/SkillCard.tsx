import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native'


interface skillCardProps extends TouchableOpacityProps {
  skill: string

}

export function SkillCard({ skill, ...rest }: skillCardProps) {

  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      {...rest}
    >
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

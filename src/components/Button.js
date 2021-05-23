import  React  from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export function Button({onPress}){
    return(

        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.3}
        style={styles.button}>

        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Add</Text>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    button: {
      backgroundColor: '#a370f7',
      padding: 15,
      borderRadius: 8,
      marginTop: 14,
      alignItems: 'center',
    },
  
  })

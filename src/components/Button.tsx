import  React  from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native'

interface buttonProps extends TouchableOpacityProps{
    title:string
};

export function Button({title, ...rest}:buttonProps){
    return(

        <TouchableOpacity
        activeOpacity={0.3}
        style={styles.button}
        {...rest}
        > 
       
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
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

import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddTodo(){

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText()
    }

    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='add something to do...'
            onChangeText={changeHandler}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
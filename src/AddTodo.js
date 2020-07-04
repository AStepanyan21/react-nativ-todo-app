import React, {useState} from 'react'
import {View , StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = (props) =>{
    const [value, setValue] = useState('')


    const pressHendler = ()=>{
        if(value.trim()){
            props.onSubmit(value)
            setValue('')
        }
        else
        {
            Alert.alert('Вы не ввели текст!!!')
        }
    }

    return(
        <View style = { styles.block }>
            <TextInput  
                style = { styles.input }
                onChangeText = { setValue }
                value = { value }
                placeholder = 'Введите текст!!'
                autoCorrect = { false }
                autoCapitalize = 'none'
            />
            <Button title = 'Добавить' onPress = {pressHendler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'

    },
    input:{
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3847ab',
        padding: 10

    },
})
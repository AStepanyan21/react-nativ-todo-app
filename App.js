import React, {useState} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {Navbar} from './src/Navbar' 
import {AddTodo} from './src/AddTodo' 
import {Todo} from './src/Todo'

export default function App() {
  const [todos, setTodo] = useState([])
  
  const addTodo=(title)=>{
    setTodo(prev=>[...prev,{
      id: Date.now().toString(),
      title
    }]
    )
  }
  return (
    <View >
      <Navbar title = "Todo app" />
      <View style={ styles.container }>
        <AddTodo onSubmit = { addTodo } />
      
        <ScrollView>
          {todos.map(todo =><Todo todo={todo} key={todo.id} />)}
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

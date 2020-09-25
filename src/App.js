import React,{useState,useEffect} from 'react';
import Todo from './Todo'
import { Button ,InputLabel,Input,FormHelperText,FormControl,List,ImageIcon} from '@material-ui/core';
import './App.css';
import db from './firebase'
import firebase from 'firebase'

function App() {
   const [todos, settodos] = useState([]);
   const [input, setInput] = useState('');
   console.log(input);

   useEffect(() =>{
      db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        settodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))
      })
   },[] )

  const addtodo = (event) => {
      event.preventDefault()

      db.collection('todos').add({
        todo: input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      settodos([...todos, input])
      setInput('')
      console.log(todos)
  }
  return (
    <div className="App">
      
      <h1>Todo List </h1>
<form>
      <FormControl>
        <InputLabel >Enter a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Complete your tasks</FormHelperText>
        <Button disabled={!input} type="submit" onClick={addtodo} variant="contained" color="primary">Add Todo</Button>
      </FormControl>
      </form> 
      
        <ul>
          {todos.map(todo => (
            <Todo todo={todo}/>
            //<List>{todo}</List>
          ))}
          
        </ul>
    </div>

  );
}

export default App;

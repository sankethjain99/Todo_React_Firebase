import React, { useState } from 'react'
import './Todo.css'
import { List,ListItem,ListItemAvatar,Avatar,ImageIcon,ListItemText, Button,Modal,makeStyles} from '@material-ui/core';
import db from './firebase'
import firebase from 'firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { spacing } from '@material-ui/system';




function getModalStyle() {
    const top = 50  ;
    const left = 50 ;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
      position: 'absolute',
      paddingTop:40,
      width: 300,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      
    },
  })); 
  const theme = {
    spacing: [0, 2, 3, 5, 8],
  }

function Todo(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] =useState(false); 
    const [input, setInput] =useState();
   
  const handleOpen= () => {
      setOpen(true);
  };

  const updateTodo = () => {
      db.collection('todos').doc(props.todo.id).set({
           todo: input 
      },{merge: true});
      setOpen(false);

  }
  
    return (
        <>
        <Modal
        open = {open}
        onClose={e => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >

            <div style={modalStyle} className={classes.paper}>
                <h1>Make Edit Here</h1> 
                <input  placeholder={props.todo.todo} value={input} onChange={ event => setInput(event.target.value)}/>
                <Button  mt={2} mb={2} ml={2} mr={2} onClick={updateTodo} variant="contained" color="primary">Update Todo</Button>
            </div>

        </Modal>
        <List className = "todo_list">
            <ListItem>
                <ListItemAvatar>
                 
                </ListItemAvatar>
                <ListItemText primary= {props.todo.todo} secondary="DeadLine ⏰"/>
            </ListItem>
            <Button onClick={e=> setOpen(true)} v><EditIcon></EditIcon></Button>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()} ><DeleteIcon></DeleteIcon></Button>
        </List>
        </>
        
    )
}

export default Todo

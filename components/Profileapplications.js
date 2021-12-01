import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "../styles/myClass.module.css";
import Link from "next/link";
//import { db } from "../firebase/firebase";
import {db} from "../firebase/firebase";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {message,Alert} from 'antd';
import 'antd/dist/antd.css';

function Profileapplications() {
  const db = getFirestore();
  const [showAlert,setShowAlert] = useState(false);

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [data, setData] = useState({
    fisrtName: "",
    lastName: "",
    imageUrl:"",
    jobTItle:"",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

   
   

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "profileApplications"), data)
      .then((docRef) => {
        console.log("Profile added", docRef.id);
        setInterval(()=>{
          setShowAlert(true)
        },);
      })
      .catch((error) => {
        console.error("Error occurred while adding profile", error);
      });
  };

  const [open, setOpen] = React.useState(false);

  //Handling change for each input field
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={styles.messagesContainer}>
        <div>
         {showAlert && 
           <Alert
           type='success'
           message='Successful'
           description='Profile has been sent'
           style={{backgroundColor:'#5cb85c'}}
           closable
           />}
           </div>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Add Profile
          </Button>
      
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Apply for Job</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              name="fisrtName"
              value={data.fisrtName}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Last Name"
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Job Title"
              type="text"
              name="jobTItle"
              value={data.jobTItle}
              onChange={handleChange}
              fullWidth
            />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Image Upload"
            type="text"
            name="imageUrl"
            value={data.imageUrl}
            onChange={handleChange}
            fullWidth
          />
          
            
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
            Send
            </Button>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
      
    </div>
  );
}

export default Profileapplications;
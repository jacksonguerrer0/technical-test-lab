import { db, firebase, google, auth } from "../firebase_config/firebase_config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {addDoc, collection } from 'firebase/firestore'
export const loginGoogle = async () => {
  await firebase.auth().signInWithPopup(google)
}

export const registerEmailAndPassword = (name, email, password) => {
  createUserWithEmailAndPassword (auth, email, password)
    .then(async ({user}) => {
      console.log(db)
      if (user) {
       addDoc(collection(db, `agendaUsuarios/${name}/`),{
         name: name,
         email: email,
         id: user.uid
       })
       .then(() => console.log("Number changer"))
       .catch(error => console.log(error))
      } else {
        console.log("No user")
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
}
export const loginEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
      .then(({user})=>{
          console.log(user.uid, user.email, user.displayName)
      })
      .catch(error => {
          throw error
      })
}


// agregar

export const addRegisterAgenda  = (id, data) => {
  db.collection(`/agendaUsuarios/${id}`).add(data)
  
}
export const getAgenda =  async(id) => {
  let res = await db.collection(`/agendaUsuarios/${id}`).get()
  const movies = []
  res.forEach(element => {
      movies.push({...element.data(), id: element.id })
  });
}
export const deleteRegsiterAgenda = (idUser, idItem) => {
  db.collection(`/agendaUsuarios/${idUser}`).doc(idItem).delete()
}

export const editRegisterAenda = (idUser, idItem, data) => {
  db.collection(`/agendaUsuarios/${idUser}`).doc(idItem).update(data)
}
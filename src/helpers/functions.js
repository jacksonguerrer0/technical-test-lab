import { db, firebase, google } from "../firebase_config/firebase_config"


export const loginGoogle = async () => {
  await firebase.auth().signInWithPopup(google)
}

export const registerEmailAndPassword = (name, email, password) => {
  // firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then(async (e) => {
    //   // await user.updateProfile({displayName: name})
    //   console.log(e)
    // })
}
export const loginEmailAndPassword = (email, password) => {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(({user})=>{
//           console.log(user.uid, user.email, user.displayName)
//       })
//       .catch(error => {
//           throw error
//       })
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
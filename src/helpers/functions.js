import  firebaseApp  from "../firebase_config/firebase_config"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore'

const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()
const firestore  = getFirestore(firebaseApp)

export const loginGoogle = async () => {
  await signInWithRedirect(auth, googleProvider)
  
}

export const registerEmailAndPassword = (name, email, password) => {
  createUserWithEmailAndPassword (auth, email, password)
    .then(async ({user}) => {
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
          console.log(error)
      })
}



// Firestore

// Obtener o crear documento
export const getDocOrAddDoc =  async (id, setDataAgendaUser) => {
  // Referencia del documento
  const docRef = doc(firestore, `agendaUsuarios/${id}`)
  // Obtener documento
  const docRes = await getDoc(docRef)

  // Si existe el documeno
  if(docRes.exists()){
    onSnapshot(docRef, (doc) => {
      setDataAgendaUser(doc.data())
    });
  }
  // Si no existe puedo agregar valores por defecto 
  else{
    const docData = await setDoc(docRef, {agenda: [], usuario: {}})
    return docData
  }
}

export const addRegisterAgenda  = async (id, data) => {
  // Referencia del documento
  const docRef = doc(firestore, `agendaUsuarios/${id}`)
  // Obtener documento
  const docRes = await getDoc(docRef)

  const newArr = [
    ...docRes.data().agenda, {...data, id: new Date().getTime()}
  ]

  await updateDoc(docRef, {agenda: [...newArr]})
  
}
export const deleteRegisterAgenda = async (id, item) => {
  const docRef = doc(firestore, `agendaUsuarios/${id}`)
  const docRes = await getDoc(docRef)
  const agenda = docRes.data().agenda
  const resArr = agenda.filter(ele => ele.id !== item.id)
  await updateDoc(docRef, {agenda: [...resArr]})

}

export const editRegisterAgenda = async (id, data, dataForm) => {
  const docRef = doc(firestore, `agendaUsuarios/${id}`)
  const docRes = await getDoc(docRef)
  const docAgenda = docRes.data().agenda
  const filtro = docAgenda.filter(ele => ele.id !== data.id)
  const newAgenda = {
    ...data, 
    ...dataForm
  }
  await updateDoc(docRef, {agenda: [
    ...filtro, newAgenda
  ]})
}




// export const snapshotAgenda = (id) => {
//   const docRef = doc(firestore, `agendaUsuarios/${id}`)
//   const unsub = onSnapshot(docRef, (doc) => {
//     console.log(doc.data(), 'unsub')
//       return doc.data()
//   });
// }
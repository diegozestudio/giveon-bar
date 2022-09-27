import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8eIUd0ikplK02Mexn2RDzqsf5GsTwZps",
  authDomain: "giveondb.firebaseapp.com",
  projectId: "giveondb",
  storageBucket: "giveondb.appspot.com",
  messagingSenderId: "855524460061",
  appId: "1:855524460061:web:86d2e3d00d29ea1b0ca8f4",
  measurementId: "G-BDGVY7QS7L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addComida = async () => {
  try {
    const docRef = await addDoc(collection(db, "comidas"), {
      nombre: "Hamburguesa",
      descripcion: "Hamburguesa completa en pan de papa",
      precio: 1000,
      visibilidad: true,
      esVeggie: false,
      imagen: null,
      categoria: "hamburguesas"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}



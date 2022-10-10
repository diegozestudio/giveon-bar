import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8eIUd0ikplK02Mexn2RDzqsf5GsTwZps",
  authDomain: "giveondb.firebaseapp.com",
  projectId: "giveondb",
  storageBucket: "giveondb.appspot.com",
  messagingSenderId: "855524460061",
  appId: "1:855524460061:web:86d2e3d00d29ea1b0ca8f4",
  measurementId: "G-BDGVY7QS7L",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addFood = (comida) => {
  addDoc(collection(db, "comidas"), comida);
};

export const getFoods = async () => {
  const querySnapshot = await getDocs(collection(db, "comidas"));
  const foods = [];
  querySnapshot.forEach((doc) => {
    foods.push({
      id: doc.id,
      nombre: doc.data().nombre,
      precio: doc.data().precio,
      categoria: doc.data().categoria,
      descripcion: doc.data().descripcion,
      esVeggie: doc.data().esVeggie,
      visibilidad: doc.data().visibilidad,
      imagen: doc.data().imagen,
    });
  });
  return foods
};

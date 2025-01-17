import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDLYaW39vlcCzWPjdN4CYqkW-nMnDwfiM",
  authDomain: "teste-57bf3.firebaseapp.com",
  projectId: "teste-57bf3",
  storageBucket: "teste-57bf3.appspot.com",
  messagingSenderId: "1049048432978",
  appId: "1:1049048432978:web:89f80efc665ed45f843a8b",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      //logado, retornar usuário
      return userCredentials.user;
    })
    .catch((error) => {
      window.alert("Erro ao fazer login: " + error.message);
      return null;
    });
}

export async function logado() {
  return auth.operations.then(() => {
    return auth.currentUser;
  });
}

export function deslogar() {
  return signOut(auth)
    .then(() => {
      //deslogado, remover usuário da dashboard
      console.log("deslogado");
      return true;
    })
    .catch((error) => {
      window.alert("Erro ao deslogar: " + error.message);
      return false;
    });
}

export function getQuizzes() {
  const fileURL = "teste.json";

  const storage = getStorage();
  const storageRef = ref(storage, fileURL);

  return getDownloadURL(storageRef)
    .then((url) => {
      return fetch(url)
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.log("Erro ao requisitar json: ", err);
          return null;
        });
    })
    .catch((err) => {
      console.log("Erro ao solicitar URL: ", err);
      return null;
    });
}

export function insertQuizzes(quizzes) {
  const fileURL = "teste.json";

  const storage = getStorage();
  const storageRef = ref(storage, fileURL);

  const uploadData = new Blob([JSON.stringify(quizzes)], {
    type: "application/json",
  });

  uploadBytes(storageRef, uploadData)
    .then(() => {
      console.log("Arquivo enviado!");
    })
    .catch((error) => {
      console.log("Erro ao enviar arquivo: ", error);
    });
}

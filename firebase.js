import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import { getDownloadURL, getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js"

const firebaseConfig = {
    //importar do .env ou do console do firebase
};
const app = initializeApp(firebaseConfig);

export function getQuizzes() {
    const fileURL = "teste.json";

    const storage = getStorage();
    const storageRef = ref(storage, fileURL);

    return getDownloadURL(storageRef)
        .then(url => {
            return fetch(url)
                .then(response => {
                    return response.json()
                })
                .catch(err => {
                    console.log("Erro ao requisitar json: ", err)
                    return null;
                });
        })
        .catch(err => {
            console.log("Erro ao solicitar URL: ", err)
            return null;
        });
}

export function insertQuizzes(quizzes) {
    const fileURL = "teste.json";
    
    const storage = getStorage();
    const storageRef = ref(storage, fileURL);

    const uploadData = new Blob([JSON.stringify(quizzes)], { type: 'application/json' });
    
    uploadBytes(storageRef, uploadData).then(() => {
        console.log("Arquivo enviado!");
    })
    .catch((error) => {
        console.log("Erro ao enviar arquivo: ", error);
    });
}



let firebaseConfig = {
    apiKey: "AIzaSyAN__scG5WdGHDq2VR6uCAYx3qnBKmsPiw",
    authDomain: "philo-87791.firebaseapp.com",
    projectId: "philo-87791",
    storageBucket: "philo-87791.appspot.com",
    messagingSenderId: "526706774130",
    appId: "1:526706774130:web:4ff5be1c40ecac076df2eb"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAK6ZTnoptJyn_pYo2mKB5ssY0ymmKROr4",
    authDomain: "fir-202510-tran-tri.firebaseapp.com",
    projectId: "fir-202510-tran-tri",
    storageBucket: "fir-202510-tran-tri.firebasestorage.app",
    messagingSenderId: "959906679138",
    appId: "1:959906679138:web:55f87425f4fa12cf2fc43b"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


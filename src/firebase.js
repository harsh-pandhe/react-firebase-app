import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { doc, setDoc, getDocs, where, query } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoeEBE7c6X5xyrmRjUBqyPm3yui-T52YM",
    authDomain: "harshpandhe-3beeb.firebaseapp.com",
    databaseURL: "https://harshpandhe-3beeb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "harshpandhe-3beeb",
    storageBucket: "harshpandhe-3beeb.appspot.com",
    messagingSenderId: "963335796302",
    appId: "1:963335796302:web:0ebe2b9dca438b215e751f",
    measurementId: "G-CYEKV0FXYD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, addDoc, setDoc, getDocs, doc, where, query };

// import { app, collection, db, addDoc, setDoc, doc, getDoc } from './firebase';

// const citiesRef = collection(db, "cities");

// await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"]
// });
// await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"]
// });
// await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"]
// });
// await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"]
// });
// await setDoc(doc(citiesRef, "BJ"), {
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"]
// });
// await setDoc(doc(citiesRef, "Mu"), {
//     name: "Mumbai", state: "MA", country: "India", region: ["Decacan", "near-ocean"], capital: true, population: 19230123
// });


// const docRef = doc(db, "cities", "Mu");
// const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    // } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    // }

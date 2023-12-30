import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

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

try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovalce",
        born: 1988
    });
    console.log(docRef.id);
} catch (e) {
    console.log(e);

}
const App = () => {

    return (
        <div>
            <h1>Your App</h1>
            {/* Other components or content can be added here */}
        </div>
    );
};

export default App;